//navbar
import {features,navbar} from '../component/nav.js'
document.querySelector('#navbar').innerHTML=navbar();
features('webseries');
//.........................................................//
//footer
import { footer } from '../component/footer.js';
document.querySelector('#footer_top').innerHTML=footer();
//.........................................................//
//slider
import { webseriesslider,swiperfn } from '../component/webseries.js';
document.getElementById('slider').innerHTML=webseriesslider();
swiperfn();
//...........................................................//
//jsslider
import {slideHtml,slidecontrol} from "../component/content.js";

let h = document.getElementById("jsSlide")
h.innerHTML = slideHtml()
slidecontrol();
//..............................................................//