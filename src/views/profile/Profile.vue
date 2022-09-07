<template>
  <ion-grid>
    <ion-row class="first-row">
      <ion-col> </ion-col>
    </ion-row>
    <ion-img class="profile-img" :src="profileImage"></ion-img>
    <div>
      <ion-col class="actions-row">
        <ion-button color="warning" @click="openModal"
          >Cambiar contraseña</ion-button
        >
        <Teleport to="body">
          <div v-if="open" class="modal">
            <ion-item color="black" >
              <ion-label> Cambiar contraseña </ion-label>
            </ion-item>
            <ion-input 
              class="pass-txt"
              :value="newPassword"
              color="light"
              type="password"
              inputmode="password"
              placeholder="Password"
              @ionInput="newPassword = $event.target.value"
            />
            <div class="modal-actions">
              <ion-button :disabled='newPassword.length < 8' @click="changePasword" color="success"
                >Cambiar</ion-button
              >
              <ion-button @click="open = false" color="danger"
                >Cancelar</ion-button
              >
            </div>
          </div>
        </Teleport>
      </ion-col>
    </div>
  </ion-grid>
</template>

<script lang="ts">
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

export default {
  name: "profile-view",
  components: {
    IonCol,
    IonGrid,
    IonItem,
    IonLabel,
    IonRow,
    IonImg,
    IonButton,
    IonInput,
  },
  setup() {
    const open = ref(false);
    const profileImage =
      "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=";

    const openModal = () => {
      console.log("pepe");
      open.value = true;
    };

    const newPassword: Ref<string> = ref("");

    const changePasword = async () => {
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

    return {
      profileImage,
      open,
      openModal,
      changePasword,
      newPassword,
    };
  },
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
.modal-actions {
  display: flex;
  justify-content: center;
  margin-top: 20%;
  margin-bottom: 1rem;
}
.actions-row {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}
.pass-txt {
  background-color: rgb(24, 26, 26) !important;
  border-radius: 20px;
  min-height: 60px !important;
  max-width: 80%;
  margin-left: 10%;
  margin-top: 1rem;
}
</style>
