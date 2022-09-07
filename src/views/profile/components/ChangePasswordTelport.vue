<template>
    <ion-item color="black">
      <ion-label style="color:white"> Cambiar contraseña </ion-label>
    </ion-item>
    <ion-input class="pass-txt" :value="newPassword" color="light" type="password" inputmode="password"
      placeholder="Password" @ionInput="newPassword = $event.target.value" />
    <div class="modal-actions">
      <ion-button :disabled='newPassword.length < 8' @click="changePassword" color="success">Cambiar</ion-button>
      <ion-button @click="cancel" color="danger">Cancelar</ion-button>
    </div>
</template>
<script lang="ts" setup>
import {IonButton , IonInput, IonItem, IonLabel} from "@ionic/vue";
import {Ref, ref, defineEmits} from 'vue';

  const newPassword : Ref<string> = ref('');
  const emits = defineEmits<{
    (e: 'changePasword', newPAssword: string): void;
    (e: 'cancelOption'): void;
  }>();

  const cancel=()=> {
    emits('cancelOption');
  }
  const changePassword = () => {
    emits('changePasword', newPassword.value);
  }
</script>

<style scoped>

</style>
