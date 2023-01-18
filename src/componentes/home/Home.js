class Home extends HTMLElement {
    constructor(){

        super();

        console.log("constructor", this);
        this.innerHTML = `
            <component-menu></component-menu>
            <component-form></component-form>
        `;
    }

    connectedCallback() {
        console.log("connected", this)
    }

    disconnectedCallback() {
        console.log("desconnected!", this)
    }
}

if ('customElements' in window){
    customElements.define('component-home', Home);
}   
