
import {SiteUser} from "/customElement/first-component/first.js"
import {Second} from "/customElement/second-component/second.js"
import { Course } from "/customElement/item-course/course.js";
window.customElements.define("site-user", SiteUser);

window.customElements.define("second-comp", Second);
window.customElements.define("item-course", Course);


// let li;
// let ul = document.createElement("ul");
// document.body.appendChild(ul);
// for ( i = 0; i <= 100000; i++) {
    
//     li = document.createElement("li");
//     li.innerHTML = 'hello'
//     ul.appendChild(li)
   
//  }
// let ul
// for (i = 0; i <= 100; i++) {
//      ul = document.createElement("site-user");
//     document.body.appendChild(ul);
// }

