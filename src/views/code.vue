<template>
  <div class="container-sm cont">
 

    <div class="grideo">
      <div>
        <button class="join">JOIN</button>
      </div>
      <div>
        <button class="login">LOGIN</button>
      </div>
    </div>

    <div class="content-1">
      <div class="CONTENT2121">
        <p class="mt-2 text-white">
          <i class="fa fa-volume-up" aria-hidden="true"></i> &nbsp;&nbsp;Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quas
          eius modi in dolor quis sed dolore? Cupiditate veritatis dolorum nam
          debitis? Magni quaerat
        </p>
      </div>
      <!-- swiper section -->
   <slider-frame
      :slides-per-view="5"
      :breakpoints="{ sm: 1, md: 2, lg: 3, xl: 4 }"
    >
      <div
        class="slider d-inline-flex"
        slot-scope="{
          next,
          prev, 
          canScrollNext,
          canScrollPrev,
        }"
      >
        <button
          class="mr-2 my-auto button fishinhh"
          :disabled="!canScrollPrev"
          @click="prev"
        >
         <i class="fa fa-caret-left"></i>
          <span class="sr-only">Previous</span>
        </button>
        <slider-slides>
          <slider-slide class="diamond">
            <figure class="imgbox ">
              <img src="../assets/home pages/slot icon 2.png" alt="" />
              <figcaption>
                <p>SLOTS</p>
              </figcaption>
            </figure>
          </slider-slide>
          <slider-slide class="diamond">
            <figure class="imgbox">
               <img src="../assets/home pages/fishing icon 2.png" alt="" />
              <figcaption>
                <p>FISHING</p>
              </figcaption>
            </figure>
          </slider-slide>
          <slider-slide class="diamond"> 
            <figure class="imgbox">
             <img src="../assets/home pages/vip icon 2.png" alt="" />
              <figcaption>
                <p>VIP</p>
              </figcaption>
            </figure>
          </slider-slide>

          <slider-slide class="diamond">
            <figure class="imgbox">
           <img src="../assets/home pages/live icon 2.png" alt="" />
              <figcaption>
                <p>SLOTS</p>
              </figcaption>
            </figure>
          </slider-slide>
          <slider-slide class="diamond">
            <figure class="imgbox">
                  <img src="../assets/home pages/live icon 2.png" alt="" />
              <figcaption>
                <p>LIVE</p>
              </figcaption>
            </figure>
          </slider-slide>

          <slider-slide class="diamond">
            <figure class="imgbox ">
              <img src="../assets/home pages/slot icon 2.png" alt="" />
              <figcaption>
                <p>SLOTS</p>
              </figcaption>
            </figure>
          </slider-slide>
          <slider-slide class="diamond">
            <figure class="imgbox">
               <img src="../assets/home pages/fishing icon 2.png" alt="" />
              <figcaption>
                <p>FISHING</p>
              </figcaption>
            </figure>
          </slider-slide>
          <slider-slide class="diamond"> 
            <figure class="imgbox">
             <img src="../assets/home pages/vip icon 2.png" alt="" />
              <figcaption>
                <p>VIP</p>
              </figcaption>
            </figure>
          </slider-slide>

          <slider-slide class="diamond">
            <figure class="imgbox">
           <img src="../assets/home pages/live icon 2.png" alt="" />
              <figcaption>
                <p>SLOTS</p>
              </figcaption>
            </figure>
          </slider-slide>
          <slider-slide class="diamond">
            <figure class="imgbox">
                  <img src="../assets/home pages/live icon 2.png" alt="" />
              <figcaption>
                <p>LIVE</p>
              </figcaption>
            </figure>
          </slider-slide>
            
        </slider-slides>
        <button
          class="button liveac ml-2 my-auto "
          :disabled="!canScrollNext"
          @click="next"
        >
         <i class="fa fa-caret-right "></i>
          <span class="sr-only ">Next</span>
        </button>
      </div>
    </slider-frame>
   
    </div>
    <div class="paython">
      <div class="mango">
        <figure class="imgbox">
          <img
            class="spader"
            src="../assets/New folder (24)/pragmatic-play-new.jpg"
            alt=""
          />
          <figcaption>
            <p>pragmatic</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader"
            src="../assets/New folder (24)/spadegaming-new.jpg"
            alt=""
          />
          <figcaption>
            <p>Spadegaming</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader1"
            src="../assets/New folder (24)/playtech-new.jpg"
            alt=""
          />
          <figcaption>
            <p>Playtech</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader"
            src="../assets/New folder (24)/918kiss.jpg"
            alt=""
          />
          <figcaption>
            <p>918kiss</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader1"
            src="../assets/New folder (24)/mega888-hot.jpg"
            alt=""
          />
          <figcaption>
            <p>Mega888</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader"
            src="../assets/New folder (24)/pussy888-hot.jpg"
            alt=""
          />
          <figcaption>
            <p>Pussy888</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img class="spader" src="../assets/New folder (24)/xe88.jpg" alt="" />
          <figcaption>
            <p>Xe88</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader"
            src="../assets/New folder (24)/evo888.jpg"
            alt=""
          />
          <figcaption>
            <p>Evo888</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader1"
            src="../assets/New folder (24)/live22.jpg"
            alt=""
          />
          <figcaption>
            <p>Live22</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader"
            src="../assets/New folder (24)/pragmatic-play-new.jpg"
            alt=""
          />
          <figcaption>
            <p>pragmatic</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader"
            src="../assets/New folder (24)/spadegaming-new.jpg"
            alt=""
          />
          <figcaption>
            <p>Spadegaming</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader1"
            src="../assets/New folder (24)/playtech-new.jpg"
            alt=""
          />
          <figcaption>
            <p>Playtech</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader"
            src="../assets/New folder (24)/918kiss.jpg"
            alt=""
          />
          <figcaption>
            <p>918kiss</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader1"
            src="../assets/New folder (24)/mega888-hot.jpg"
            alt=""
          />
          <figcaption>
            <p>Mega888</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader"
            src="../assets/New folder (24)/pussy888-hot.jpg"
            alt=""
          />
          <figcaption>
            <p>Pussy888</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img class="spader" src="../assets/New folder (24)/xe88.jpg" alt="" />
          <figcaption>
            <p>Xe88</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader"
            src="../assets/New folder (24)/evo888.jpg"
            alt=""
          />
          <figcaption>
            <p>Evo888</p>
          </figcaption>
        </figure>

        <figure class="imgbox">
          <img
            class="spader1"
            src="../assets/New folder (24)/live22.jpg"
            alt=""
          />
          <figcaption>
            <p>Live22</p>
          </figcaption>
        </figure>

        <br />
      </div>
    </div>

    <header class="header">
      <div class="container">
        <nav class="bottom-nav">
          <div class="bottom-nav-item active">
            <div class="bottom-nav-link">
              <figure class="imgbox">
                <img src="../assets/home pages/home icon.png" alt="" />
                <figcaption>
                  <p>Home</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="bottom-nav-item">
            <div class="bottom-nav-link">
              <figure class="imgbox">
                <img
                  id="myImage"
                  class="myimag1"
                  src="../assets/home pages/promotion icon.png"
                  alt=""
                />
                <figcaption>
                  <p>Promotion</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="bottom-nav-item">
            <div class="bottom-nav-link">
              <figure class="imgbox">
                <img
                  class="myimag1"
                  src="../assets/home pages/contact us icon.png"
                  alt=""
                />
                <figcaption>
                  <p>Contact us</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="bottom-nav-item visible-none">
            <div class="bottom-nav-link">
              <div class="message-icon">
                <i class="fa fa-comments messa121" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
import { SliderFrame, SliderSlides, SliderSlide } from "vue-dynamic-slider";

export default {
  name: "Code",

  components: { SliderSlide, SliderSlides, SliderFrame },
};
</script>
<style scoped>
.dynamic-slider {
   width: 100% !important;
}
.liveac{
        position: absolute;
    top: 165px;
    right: 15px;
    /* bottom: 0; */
    background-color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    height: 126px;
    width: 29px;
}
.liveac i{
      color: #cdab63;
}
.fishinhh{
     position: absolute;
    top: 165px;
    /* right: 7px; */
    left: 15px;
    /* bottom: 0; */
    background-color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    height: 126px;
    width: 29px;
    opacity: 22;
    z-index: 33;
}
.fishinhh i{ 
color: #cdab63;
}
.slider {

    border:none !important;
}
</style>