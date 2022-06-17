//navbar
import {features,navbar} from '../component/nav.js'
document.querySelector('#navbar').innerHTML=navbar();
features('news');
//.........................................................//
//footer
import { footer } from '../component/footer.js';
document.querySelector('#footer_top').innerHTML=footer();
//.........................................................//
//slider
import { newsslider,swiperfn } from '../component/news.js';
document.getElementById('swiper').innerHTML=newsslider();
swiperfn();
//...........................................................//
//jsslider
import {slideHtml,slidecontrol} from "../component/content.js";

let h = document.getElementById("jsSlide")
h.innerHTML = slideHtml()
slidecontrol();
//..............................................................//
//newsslider
import { livenews_controll,livenews_slider } from '../component/livenews.js';
document.getElementById('livenews').innerHTML=livenews_slider();
livenews_controll();
//............................................................//