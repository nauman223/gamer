<template>
  <div class="container cont">
    <div class="taskbar">
      <div class="taskbar-grid">
        <div class="">
          <div class="text-left">
            <a href="#"><i class="fa fa-bars bars" aria-hidden="true"></i></a>
          </div>
        </div>
        <div class="">
          <div class="text-center">
            <img src="../assets/home pages/seabet-logo.png" alt="">
          </div>

        </div>
        <div class="">
          <div class="text-flag">
            <img src="../assets/home pages/english languege.png" alt="">
          </div>
        </div>

      </div>
    </div>
<carousel :slides="slides" :interval="3000" controls indicators></carousel>
 


    <div class="grid1">
      <div>
        <button class="join">JOIN</button>
      </div>
      <div>
        <button class="login">LOGIN</button>
      </div>
    </div>

  </div>


</template>

<script>
import Carousel from "./Carouse/Carousel.vue";
export default {
  name: 'HelloWorld',
 components: { Carousel },
  data: () => ({
    slides: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9QpQvYchKAwgYQwVKvgoBm9VvxFCZHOS2AA&usqp=CAU",
      "https://picsum.photos/id/1033/900/400",
      "https://picsum.photos/id/1037/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
    ],
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
