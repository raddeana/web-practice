/**
 * web component
 * @author Chenxiangyu
 */
const template = document.createElement('template');
 
template.innerHTML = `
    <style>
        :host {
            width: 175px;
            height: 320px;
            display: block; 
        }

        .user-card {
            margin: 20px 0 0 0;
            width: 175px;
            height: 320px;
            background-color: #d4d4d4;
            border: 1px solid #d5d5d5;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            overflow: hidden;
            padding: 10px;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        .image {
            flex: 0 0 auto;
            width: 153px;
            vertical-align: middle;
            border-radius: 5px;
        }

        .container {
            margin: 15px 0 0 0;
            box-sizing: border-box;
            height: 160px;
            text-align: center;
        }

        .container > .name {
            font-size: 20px;
            font-weight: 600;
            line-height: 1;
            margin: 0;
            margin-bottom: 5px;
        }

        .container > .email {
            font-size: 12px;
            opacity: 0.75;
            line-height: 1;
            margin: 0;
            margin-bottom: 15px;
        }

        .container > .button {
            padding: 10px 25px;
            font-size: 12px;
            border-radius: 5px;
            text-transform: uppercase;
        }
    </style>
    <div class="user-card">
        <img class="image">
        <div class="container">
            <p class="name"></p>
            <p class="email"></p>
            <button class="button">Follow</button>
        </div>
    </div>
`;

class UserCard extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({ mode: 'closed' });
        const content = template.content.cloneNode(true);
        shadow.appendChild(content);
        this.$content = shadow.querySelector('.user-card');
        this.$content.addEventListener('click', () => {
            this.dispatchEvent(
                new CustomEvent('custom-click', {
                    detail: 'Hello from within the Custom Element',
                })
            );
        });
    }

    get image () {
        return this.getAttribute('image');
    }

    set image (value) {
        this.setAttribute('image', value);
    }

    get name () {
        return this.getAttribute('name');
    }

    set name (value) {
        this.setAttribute('name', value);
    }

    get email () {
        return this.getAttribute('email');
    }

    set email (value) {
        this.setAttribute('email', value);
    }

    static get observedAttributes () {
        return ['image', 'name', 'email'];
    }


    // 生命周期hook
    // runs once the Web Component got appended to the DOM
    connectedCallback() {
        if (this.hasAttribute('as-atom')) {
            this.$content.style.padding = '0px';
        }
    }

    // 属性变化回调
    attributeChangedCallback () {
        this.render();
    }

    render () {
        this.$content.querySelector('.image').setAttribute('src', this.getAttribute('image'));
        this.$content.querySelector('.container>.name').innerText = this.getAttribute('name');
        this.$content.querySelector('.container>.email').innerText = this.getAttribute('email');
    }
}

window.customElements.define('user-card', UserCard);