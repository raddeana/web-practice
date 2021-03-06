
// Set this to false if you prefer a plain image instead.
var animate = true;

// Set up the canvas with a 2D rendering context
var cnv = document.getElementsByTagName("canvas")[0];
var ctx = cnv.getContext("2d");
var bcr = cnv.getBoundingClientRect();

// Compute the size of the viewport
var width  = bcr.width  | 0;
var height = bcr.height | 0;
var ratio  = window.devicePixelRatio || 1;
width  *= ratio;
height *= ratio;
var size = width * height;
var byteSize = size << 1; // discrete color indices in range [0, 2047] (here: 2b per pixel)

cnv.width  = width;
cnv.height = height;

ctx.scale(ratio, ratio);

// Compute the size of and instantiate the module's memory
var memory = new WebAssembly.Memory({ initial: ((byteSize + 0xffff) & ~0xffff) >>> 16 });
var mem = new Uint16Array(memory.buffer);
var imageData = ctx.createImageData(width, height);
var argb = new Uint32Array(imageData.data.buffer);

// Fetch and instantiate the module
fetch("/wasm/optimized.wasm")
.then(response => response.arrayBuffer())
.then(buffer => WebAssembly.instantiate(buffer, {
  env: { memory },
  Math
}))
.then(module => {
  var exports = module.instance.exports;
  var computeLine = exports.computeLine;
  var updateLine = function(y) {
    var yx = y * width;
    for (let x = 0; x < width; ++x) {
      argb[yx + x] = colors[mem[yx + x]];
    }
  };

  // Compute an initial balanced version of the set.
  const limit = 40;
  for (let y = 0; y < height; ++y) {
    computeLine(y, width, height, limit);
    updateLine(y);
  }

  // Keep rendering the image buffer.
  (function render() {
    if (animate) requestAnimationFrame(render);
    ctx.putImageData(imageData, 0, 0);
  })();

  if (animate) {

    // Let it glow a bit by occasionally shifting the limit...
    var currentLimit = limit;
    var shiftRange = 10;
    (function updateShift() {
      currentLimit = limit + (2 * Math.random() * shiftRange - shiftRange) | 0
      setTimeout(updateShift, 1000 + (1500 * Math.random()) | 0);
    })();

    // ...while continously recomputing a subset of it.
    var flickerRange = 3;
    (function updateFlicker() {
      for (let i = 0, k = (0.05 * height) | 0; i < k; ++i) {
        let ry = (Math.random() * height) | 0;
        let rl = (2 * Math.random() * flickerRange - flickerRange) | 0;
        computeLine(ry, width, height, currentLimit + rl);
        updateLine(ry);
      }
      setTimeout(updateFlicker, 1000 / 30);
    })();

  }
}).catch(err => {
  alert("Failed to load WASM: " + err.message + " (ad blocker, maybe?)");
  console.log(err.stack);
});

// Compute a nice set of colors using a gradient
var colors = (() => {
  var cnv = document.createElement("canvas");
  cnv.width = 2048;
  cnv.height = 1;
  var ctx = cnv.getContext("2d");
  var grd = ctx.createLinearGradient(0, 0, 2048, 0);
  grd.addColorStop(0.00, "#000764");
  grd.addColorStop(0.16, "#2068CB");
  grd.addColorStop(0.42, "#EDFFFF");
  grd.addColorStop(0.6425, "#FFAA00");
  grd.addColorStop(0.8575, "#000200");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 2048, 1);
  cnv.className = "gradient";
  setTimeout(() => document.body.appendChild(cnv));
  return new Uint32Array(ctx.getImageData(0, 0, 2048, 1).data.buffer);
})();