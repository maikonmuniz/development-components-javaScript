class Menu extends HTMLElement {
    constructor() {

        super();

        console.log("constructor", this);
        this.innerHTML = `<nav>
                            <ul class="menu">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Sobre</a></li>
                                    <li><a href="#">O que fazemos?</a>
                                            <ul>
                                                <li><a href="#">Web Design</a></li>
                                                <li><a href="#">SEO</a></li>
                                                <li><a href="#">Design</a></li>
                                            </ul>
                                        </li>
                                    <li><a href="#">Links</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>
                        </nav>`;
    }

    connectedCallback() {
        console.log("connected", this)
    }

    disconnectedCallback() {
        console.log("desconnected!", this)
    }
}

if ('customElements' in window){
    customElements.define('component-menu', Menu);
}   
