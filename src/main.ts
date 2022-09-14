import {createApp} from 'vue'
import App from './App.vue'
import router from './router';

import {IonicVue} from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

//Highchart library
import HighchartsVue from 'highcharts-vue'

/* Theme variables */
import './theme/variables.css';


const app = createApp(App)
    .use(IonicVue, {
        animated: true,
        navAnimation: 'ease-in-out'
    })
    .use(router)
    // @ts-ignore
    .use(HighchartsVue);

// TODO: check if there is a cleanner way
import * as IonComponents from '@ionic/vue';
Object.keys(IonComponents).forEach(key => {
    if (/^Ion[A-Z]\w+$/.test(key)) {
        //@ts-ignore
        app.component(key, IonComponents[key]);
    }
});


router.isReady().then(() => {
    app.mount('#app');
});
