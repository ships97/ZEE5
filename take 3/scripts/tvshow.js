//navbar
import {features,navbar} from '../component/nav.js'
document.querySelector('#navbar').innerHTML=navbar();
features('tvshow');
//.........................................................//
//footer
import { footer } from '../component/footer.js';
document.querySelector('#footer_top').innerHTML=footer();
//.........................................................//
//slider
import { tvshowslider,swiperfn } from '../component/tvshow.js';
document.getElementById('slider').innerHTML=tvshowslider();
swiperfn();
//...........................................................//
//jsslider
import {slideHtml,slidecontrol} from "../component/content.js";

let h = document.getElementById("jsSlide")
h.innerHTML = slideHtml()
slidecontrol();
//..............................................................//