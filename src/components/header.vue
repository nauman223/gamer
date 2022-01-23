<template>
  <div class="promo">
    <header class="header">
      <nav class="bottom-nav1">
        <div class="bottom-nav1-item active">
          <div class="bottom-nav1-link">
            <router-link to="/promoPage" v-slot="{ href, navigate }">
              <figure class="imgbox" :href="href" @click="navigate">
                <img
                  id="myImage"
                  class="myimag1 botton1"
                  src="../assets/home pages/promotion icon.png"
                  alt=""
                />
                <figcaption>
                  <p class="pointer pro9">PROMO</p>
                </figcaption>
              </figure>
            </router-link>
          </div>
        </div>

        <div class="bottom-nav1-item">
          <div class="bottom-nav1-link">
            <router-link to="/promoCode" v-slot="{ href, navigate }">
              <figure class="imgbox" :href="href" @click="navigate">
                <img
                  id="myImage"
                  class="myimag1 botton1"
                  src="../assets/home pages/slot icon 2.png"
                  alt=""
                />
                <figcaption>
                  <p class="pointer pro9">HISTORY</p>
                </figcaption>
              </figure>
            </router-link>
          </div>
        </div>

        <div class="bottom-nav1-item">
          <div class="bottom-nav1-link">
            <router-link to="/" v-slot="{ href, navigate }">
              <figure class="imgbox" :href="href" @click="navigate">
                <img
                  class="myimag1 botton1"
                  src="../assets/home pages/home icon.png"
                  alt=""
                />
                <figcaption></figcaption>
              </figure>
            </router-link>
          </div>
        </div>

        <div class="bottom-nav1-item">
          <div class="bottom-nav1-link">
            <router-link to="/vip" v-slot="{ href, navigate }">
              <figure class="imgbox" :href="href" @click="navigate">
                <img
                  id="myImage"
                  class="myimag1 botton1"
                  src="../assets/home pages/profile icon.png"
                  alt=""
                />
                <figcaption>
                  <p class="pointer pro9">PROFILE</p>
                </figcaption>
              </figure>
            </router-link>
          </div>
        </div>
        <div class="bottom-nav1-item">
          <div class="bottom-nav1-link">
            <router-link to="/contact" v-slot="{ href, navigate }">
              <figure class="imgbox" :href="href" @click="navigate">
                <img
                  id="myImage"
                  class="myimag1 botton1"
                  src="../assets/home pages/contact us icon.png"
                  alt=""
                />
                <figcaption>
                  <p class="pointer pro9">CONTACT</p>
                </figcaption>
              </figure>
            </router-link>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
