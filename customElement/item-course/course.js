
const template = document.createElement("template");
template.innerHTML = `<link rel="stylesheet" href="customElement/item-course/courses.css">
 <div class="item-main">
      <div class="cover">
      <img src="https://www.computerhope.com/jargon/j/javascript.png" alt="">
      </div>
      <div class="content">
        <h2 class="title"><slot name="title"></slot></h2>
        <div class="info">
          <p id="author"></p>
          <p id="counts"></p>
        </div>
        <div class="btns">
          <button id="register"> regester </button>
          <button>more info</button>
        </div>
      </div>
  </div>
`;

class Course extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
     
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  register = ()=> { 
    console.log(this);
    alert(this.getAttribute('name'))
  }
  // register { 
  //   console.log(this);
  //   alert(this.getAttribute('name'))
  // }

  connectedCallback() {

    //console.log(this.shadowRoot);
    console.log(this);
    this.shadowRoot.getElementById('author').innerHTML = this.getAttribute('name')
    this.shadowRoot.getElementById('counts').innerHTML = this.getAttribute('count')

    this.shadowRoot.getElementById('register').addEventListener('click', this.register )
    
  }
  static observedAttributes() {
    return ['name','count']
  }

}

export { Course };
