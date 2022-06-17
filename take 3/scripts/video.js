

//navbar
import {features,navbar} from '../component/nav.js'
document.querySelector('#navbar').innerHTML=navbar();
features('home');
//.........................................................//
//footer
import { footer } from '../component/footer.js';
document.querySelector('#footer_top').innerHTML=footer();
//...........................................................//
//..............................................................//



let sorter = (value) => {
    return document.createElement(value);
}
let getSorter = (val) => {
    return document.getElementById(val);
}

//=======================(Youtue featching part is here)====================================
const KEY = "AIzaSyAb2IoViVL4EG9yRiI0VNRSWIMzfCShylc";
let youtubeVideo = async() => {    //instead of zeeserial you can give your input.
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=zeeserial&key=${KEY}`;
    try {
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data.items[0])
        append(data.items[0])
    } catch (err) {
        console.log(err);
    }
}
youtubeVideo();
//=====================(appending part is here)====================================
let append = (data) => {
    let container = document.getElementById("videoData");
    container.innerHTML=null;

    let iframe = sorter("iframe");
    iframe.src=`https://www.youtube.com/embed/${data.id.videoId}`;
    iframe.width="100%";
    iframe.height="500px";
    iframe.allow="fullscreen";

    let title = getSorter("about_show");
        title.innerText=`Title: ${data.snippet.title}`;

    let desc = getSorter("description");
    desc.innerText=`Description: ${data.snippet.description}`;


    let channel = getSorter("channel");
    channel.innerText=`Released by: ${data.snippet.channelTitle}`;

    container.append(iframe);

}




