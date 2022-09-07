<template>
  <ion-grid>
    <ion-row class="first-row">
      <ion-col> </ion-col>
    </ion-row>
    <ion-img class="profile-img" :src="profileImage"></ion-img>
    <div>
      <ion-col class="actions-row">
        <ion-button color="warning" @click="openModal">Cambiar contraseña</ion-button>
        <Teleport to="body">
          <div v-if="open" class="modal">
          <ChangePasswordTelport  @change-pasword="changePasword"  @cancel-option="cancelOption" />
          </div>
        </Teleport>
      </ion-col>
    </div>
  </ion-grid>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import {
  IonCol,
  IonGrid,
  IonButton,
  IonInput,
  IonRow,
  IonLabel,
  IonItem,
  IonImg,
  toastController,
} from "@ionic/vue";
import ChangePasswordTelport from "./components/ChangePasswordTelport.vue";
import ChangePasswordTelport1 from "./components/ChangePasswordTelport.vue";



const open = ref(false);
const profileImage =
  "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=";

const cancelOption = () => {
  open.value = false;
}
const openModal = () => {
  console.log("pepe");
  open.value = true;
};

const newPassword: Ref<string> = ref("");

const changePasword = async (newPass: string) => {
  console.log('PEP8888ITOO', newPass);
  //TODO: implement profile controller
  console.log("New password is :", newPassword.value);
  const toast = await toastController.create({
    message: "Contraseña cambiada correctamente",
    duration: 1500,
    color: 'success'
  });
  await toast.present();
  open.value = false;
};



</script>

<style scoped>
.first-row {
  height: 200px;
  background-color: rgb(28, 31, 31);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.profile-img {
  max-width: 200px;
  max-height: 200px;
  clip-path: circle();
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  top: 150px;
}

.modal {
  position: fixed;
  z-index: 99999999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: rgb(59, 59, 59);
  border-radius: 20px;
  box-shadow: 0 0 30px #acacac;
  min-height: 10vh;
  margin-top: 5%;
}
.actions-row {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}
</style>
