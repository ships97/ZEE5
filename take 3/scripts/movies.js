//navbar
import {features,navbar} from '../component/nav.js'
document.querySelector('#navbar').innerHTML=navbar();
features('movies');
//.........................................................//
//footer
import { footer } from '../component/footer.js';
document.querySelector('#footer_top').innerHTML=footer();
//.........................................................//
//slider
import { movieslider,swiperfn } from '../component/movie.js';
document.getElementById('slider').innerHTML=movieslider();
swiperfn();
//.............................................................//
//jsslider
import {slideHtml,slidecontrol} from "../component/content.js";

let h = document.getElementById("jsSlide")
h.innerHTML = slideHtml()
slidecontrol();
//............................................................//
//featured celibrities slider
import { celibrity_slider,celibfn } from '../component/celeb.js';
document.getElementById('f_celibrites').innerHTML=celibrity_slider();
celibfn();
