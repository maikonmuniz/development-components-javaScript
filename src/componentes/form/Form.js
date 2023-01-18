class Form extends HTMLElement {

    constructor() {

        super();

        console.log("constructor", this);
        this.innerHTML = `<form class="form-component-css">
                            <input/>
                        </form>
                        `

    }

    connectedCallback() {
        console.log("connected", this)
    }

    disconnectedCallback() {
        console.log("desconnected!", this)
    }
}

if ('customElements' in window){
    customElements.define('component-form', Form);
}   
