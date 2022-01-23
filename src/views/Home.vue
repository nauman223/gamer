<template>
  <div class="container-sm cont">
    <div class="taskbar">
      <div class="taskbar-grid taskbar-grid112">
        <div class="">
          <div class="text-left">
            <a href="#"><i class="fa fa-bars bars" aria-hidden="true"></i></a>
          </div>
        </div>
        <div class="">
          <div class="seae12">
            <img src="../assets/home pages/seabet-logo.png" alt="" />
          </div>
        </div>
        <div class="">
          <div class="text-flag flaf0">
            <img src="../assets/home pages/english languege.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <Slider
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :height="'80vh'"
      :speed="1500"
    >
      <SliderItem
        v-for="(i, index) in list"
        :key="index"
        @click="changeIndex(1)"
        :style="i"
      >
        <!-- <img
            src="https://i.ytimg.com/vi/VdK-VUm0jDg/maxresdefault.jpg"
            class="d-block w-100"
            alt="..."
          /> -->

        <div
          style="background:url('https://i.ytimg.com/vi/VdK-VUm0jDg/maxresdefault.jpg);height:80vh;width:100%;background-size: cover; background-position: center;"
        ></div>
      </SliderItem>
    </Slider>
    <!-- Swiper -->

    <div class="grid1">
      <div>
        <button class="join">JOIN</button>
      </div>
      <div>
        <router-link to="/login" v-slot="{ href, navigate }">
          <button class="login" :href="href" @click="navigate">LOGIN</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {
      list: [],
      sliderValue: 2,
    };
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    },
  },
  mounted() {
    setTimeout(
      () =>
        (this.list = [
          {
            backgroundColor: "#3f51b5",
            width: "100%",
            height: "100%",
          },
          {
            backgroundColor: "#eee",
            width: "100%",
            height: "100%",
          },
          {
            backgroundColor: "#f44336",
            width: "100%",
            height: "100%",
          },
          {
            backgroundColor: "#eee",
            width: "100%",
            height: "100%",
          },
        ]),
      1000
    );
  },
};
</script>

<style>
.slider {
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #dee2e6;
}
.active-slide {
  border: 1px solid #343a40;
}
.button {
  background-color: white;
  border: none;
  padding: 0;
  margin: 0;
}
.d-inline-flex {
  display: inline-flex;
}
.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}
.mr-2 {
  margin-right: 0.5rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.py-3 {
  padding-bottom: 1rem;
  padding-top: 1rem;
}
.w-100 {
  width: 100%;
}
.border {
  border: 1px solid #dee2e6;
}
.font-weight-bold {
  font-weight: bold;
}
*,
::after,
::before {
  box-sizing: border-box;
}
.slider-btn {
  display: none;
}
</style>
