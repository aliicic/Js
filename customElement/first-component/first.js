const template = document.createElement("template");
template.innerHTML = `<style> .name{color:blue} </style>
<slot class="name" name="username"></slot>
`;

class SiteUser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}


export {SiteUser}