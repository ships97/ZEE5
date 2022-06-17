import {features,navbar} from '../component/nav.js'
document.querySelector('#navbar').innerHTML=navbar();
features('home');

import { footer } from '../component/footer.js';
document.querySelector('#footer_top').innerHTML=footer();

import { homeslider,swiperfn } from '../component/mainslider.js';
document.getElementById('slider').innerHTML=homeslider();
swiperfn();

import { learn_slider,learnfn } from '../component/learn.js';
document.getElementById('learn').innerHTML=learn_slider();
learnfn();

import {slideHtml,slidecontrol} from "../component/content.js";

let h = document.getElementById("jsSlide")
h.innerHTML = slideHtml()
slidecontrol();

import { zeeplexappendfn,zeep } from "../component/zeeplex.js"

let main = document.getElementById("zeeplex")
main.innerHTML = zeep();
zeeplexappendfn(main);