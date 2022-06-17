let homeslider=()=>{
    return`<div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <!-- image1 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5146416/cover/1920x77030295e51fe54452d8c85e76c5ec756e8.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Attack: Part-1</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
        </div>
      </div>

      <!-- image2 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5156101/cover/1920x7702f5c1d7a0eee45bdbdd6f473c9f51fe8.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Radhe Shyam</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
        </div>
      </div>

      <!-- image3 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5145215/cover/1920x770a9add3f2aa4745838288b4147deb1b0f.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>The Broken News</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
        </div>
      </div>

      <!-- image4 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/cover/1920x77060dd64aa6ef748f48bbdf4951a1f6af7b51352ca11794ad79904fded999459e7.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>The Kashmir Files</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
        </div>
      </div>

      <!-- image5 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-10z5145273/cover/rrrpfp27in1170x658090620220ef886894f604ee8b6266bb061743a66.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>RRR</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
        </div>
      </div>

      <!-- image6 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x77089a1e7be6d5e4668bdecd1a3bad12585.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Kundli Bhagya</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
        </div>
      </div>


      <!-- button -->
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>`;
};
let swiperfn=()=>{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay:{
            delay:2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

export{homeslider,swiperfn};