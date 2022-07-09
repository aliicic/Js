const template = document.createElement("template");
template.innerHTML = `<style> h2{color:blue}</style><h2>ALI AGHAKHANI</h2>`;

class Second extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { Second };
