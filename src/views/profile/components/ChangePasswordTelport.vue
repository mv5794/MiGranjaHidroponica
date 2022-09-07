<template>
  <ion-item color="black">
    <ion-label style="color:white"> Cambiar contraseña</ion-label>
  </ion-item>
  <ion-input class="pass-txt" :value="oldPassword" color="light" type="password" inputmode="password"
             placeholder="Old password" @ionInput="oldPassword = $event.target.value"/>
  <ion-input class="pass-txt" :value="newPassword" color="light" type="password" inputmode="password"
             placeholder="New password" @ionInput="newPassword = $event.target.value"/>
  <ion-input class="pass-txt" :value="repeatedPassword" color="light" type="password" inputmode="password"
             placeholder="Repeat new password" @ionInput="repeatedPassword = $event.target.value"/>
  <div class="modal-actions">
    <ion-button :disabled='repeatedPassword.length < 8 && repeatedPassword !== newPassword && arePasswordsCorrect' @click="changePassword" color="success">Cambiar</ion-button>
    <ion-button @click="cancel" color="danger">Cancelar</ion-button>
  </div>
</template>
<script lang="ts" setup>
import {IonButton, IonInput, IonItem, IonLabel} from "@ionic/vue";
import {Ref, ref, defineEmits, watch} from 'vue';

const newPassword: Ref<string> = ref('');
const repeatedPassword: Ref<string> = ref('');
const oldPassword: Ref<string> = ref('');
const arePasswordsCorrect:Ref<boolean> = ref(true);
const emits = defineEmits<{
  (e: 'changePasword', newPAssword: string): void;
  (e: 'cancelOption'): void;
}>();

watch(repeatedPassword, (act) => {
  if(act === newPassword.value){
    arePasswordsCorrect.value = false;
  }
})

const cancel = () => {
  emits('cancelOption');
}
const changePassword = () => {
  arePasswordsCorrect.value = newPassword.value === repeatedPassword.value;
  emits('changePasword', newPassword.value);
}
</script>

<style scoped>
.pass-txt {
  background-color: rgb(24, 26, 26) !important;
  border-radius: 20px;
  min-height: 60px !important;
  max-width: 80%;
  margin-left: 10%;
  margin-top: 1rem;
}

.modal-actions {
  display: flex;
  justify-content: center;
  margin-top: 20%;
  margin-bottom: 1rem;
}

</style>
