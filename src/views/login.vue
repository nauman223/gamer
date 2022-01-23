<template>
  <div class="container-sm cont">
    <div class="taskbar">
      <div class="taskbar-grid">
        <div class="">
          <div class="text-left"></div>
        </div>
        <div class="">
          <div class="seae12">
            <img  src="../assets/home pages/seabet-logo.png" alt="" />
          </div>
        </div>
        <div class="">
          <div class="text-flag">
            <img src="../assets/home pages/english languege.png" alt="" />
          </div>
        </div>
      </div>
    </div>
 

    <Header /> 

    <div class="bonus">
      <div class="login-syssys">
        <div class="fabies">
          <div class="mt-3">
            <a href=""
              ><i class="fa fa-volume-up volume123" aria-hidden="true"></i
            ></a>
          </div>
          <div>
            <a href="#" class="loder1">Welcome to seabet</a>
          </div>
        </div>
      </div>
      <br /><br />

      <h2 class="login1">LOGIN</h2>
      <!-- Forms  -->

      <div class="row">
        <div class="col-md-6 m-auto">
          <form>
            <div class="mb-3">
              <input type="text" class="form-control" placeholder="username" />
            </div>
            <div class="mb-3">
              <input
                type="password"
                placeholder="password"
                class="form-control"
              />
            </div>

            <button type="submit" class="primarybtn">SUBMIT</button>
          </form>
          <br /><br />
          <div class="text-center">
            <span class="account"
              >Do not have an account yet? Click
              <a class="here1" href="#">here</a> to register
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="spacer-80"></div>
    <div class="footer1">
      <p class="Copyright1">Copyright 2021 SEABEAT MY. All right reserved.</p>
    </div>
  </div>
</template>

<script>
import Header from '../components/header.vue'
export default {
  name: "login",
  components: {
    Header
  }
};
</script>

<style></style>
