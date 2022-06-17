//navbar
import {features,navbar} from '../component/nav.js'
document.querySelector('#navbar').innerHTML=navbar();
features();
// .................................................//
//footer
import { footer } from '../component/footer.js';
document.querySelector('#footer_top').innerHTML=footer();
//...........................................................//
//jsslider
import {slideHtml,slidecontrol} from "../component/content.js";

let h = document.getElementById("jsSlide")
h.innerHTML = slideHtml()
slidecontrol();
//..............................................................//

let {imgurl,moviename}=JSON.parse(localStorage.getItem('tvshow'));
let poster=document.getElementById('poster');
poster.style.backgroundImage=`url(${imgurl})`
document.getElementById('moviename').innerText=moviename;
