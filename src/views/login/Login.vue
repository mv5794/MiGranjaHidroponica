<template>
  <ion-card class="card-login">
    <ion-card-header>
      <div class="login-txt-container">
        <img class="logo-img" src="../../../public/assets/logo.png" alt="logo"/>
      </div>
    </ion-card-header>

    <ion-card-content class="content-input" size-md="3">
      <ion-input class="email-txt" :value="login.email" color="light" type="email" inputmode="email" clear-input
                 placeholder="Email" @ionInput="login.m_email = $event.target.value"/>
      <br/>
      <ion-input class="pass-txt" :value="login.password" color="light" type="password" inputmode="password"
                 placeholder="Password" @ionInput="login.password = $event.target.value"/>
    </ion-card-content>

    <!--    <button @click="login" class="btn-ingresar">-->
    <!--      Ingresar-->
    <!--      <ion-ripple-effect></ion-ripple-effect>-->
    <!--    </button>-->
    <ion-button color="warning" class="btn-ingresar " size="small" @click="doLogin">Ingresar</ion-button>
  </ion-card>
</template>

<script lang="ts" setup>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonRippleEffect,
} from "@ionic/vue";
import {reactive, ref, Ref, watch} from "vue";
import loginController, {LoginController} from "./login";
import {Controller} from "@/Controller";
import {injectStrict} from "@/utils/injections";
import router from "@/router";

const app: Controller = injectStrict("appController");
const loginForm: Ref<any> = ref(null);
const logoPath: string = "../../../resources/logo.png";
const login: LoginController = reactive(new LoginController());
const wrongCredentials: Ref<boolean> = ref(false);


const doLogin = async () => {
  loginForm.value.validate().then(async (success: boolean) => {
    if (success) {
      let succesFullLogin: boolean = false;
      if (login.email !== null && login.password !== null) {
        succesFullLogin = await handle(
            app.user.doLogin({
              email: login.email,
              password: login.password
            })
        );
      }
      wrongCredentials.value = !succesFullLogin;
      await router.push("/");
    } else {
      console.log("oh no, user has filled in at least one invalid value");
    }
  })
};

const handle = (promise: any) => {
  return promise
      .then((data: any) => [data, undefined])
      .catch((error: any) => {
        Promise.resolve([undefined, error]);
        wrongCredentials.value = true;
      });
}


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

@media (min-width: 800px) {

}
</style>
