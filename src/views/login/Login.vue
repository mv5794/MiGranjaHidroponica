<template>
  <ion-card class="card-login">
    <ion-card-header>
      <div class="login-txt-container">
        <img class="logo-img" src="../../../public/assets/logo.png"  alt="logo"/>
      </div>
    </ion-card-header>

    <ion-card-content class="content-input">
      <ion-input class="email-txt" :value="username" color="light" type="email" inputmode="email" clear-input
        placeholder="email" @ionInput="username = $event.target.value" />
      <br />
      <ion-input class="pass-txt" :value="password" color="light" type="password" inputmode="password"
        placeholder="Password" @ionInput="password = $event.target.value" />
    </ion-card-content>

    <button @click="login" class="btn-ingresar ion-activatable ripple-parent">
      Ingresar
      <ion-ripple-effect></ion-ripple-effect>
    </button>
  </ion-card>
</template>

<script lang="ts" setup>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonRippleEffect,
} from "@ionic/vue";
import { ref, Ref, watch } from "vue";
import loginController from "./login";


const username: Ref<string> = ref("");
const password: Ref<string> = ref("");
const logoPath: string = "../../../resources/logo.png";
const login = async () => {
  loginController.doLogin(username.value, password.value);
};

watch(username, (act) => {
  console.log("aaaaa", act);
});


</script>

<style scoped>
.card-login {
  background-color: transparent;
  position: relative;
  min-height: 80vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.login-txt {
  margin-left: 40%;
  color: aliceblue;
}

.content-input {
  margin-top: 8vh;
}

.login-txt-container {
  padding-top: 5px;
  border-radius: 20px 100px;
  display: flex;
  justify-content: center;
}

.btn-ingresar {
  position: absolute;
  min-width: 95%;
  left: 1.5%;
  background-color: rgb(24, 26, 26) !important;
  bottom: 10%;
  min-height: 50px;
  color: aliceblue;
  font-size: x-large;
  font-family: "Courier New", Courier, monospace;
  box-shadow: 0 0 30px #585757;
  border-radius: 20px !important;
}

.email-txt {
  background-color: rgb(24, 26, 26) !important;
  border-radius: 20px;
  min-height: 60px !important;
}

.pass-txt {
  background-color: rgb(24, 26, 26) !important;
  border-radius: 20px;
  min-height: 60px !important;
}

.logo-img {
  border-radius: 20px;
  height: 200px;
  object-fit: contain;
}
</style>
