import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Vue from 'vue';
import Vuex from "vuex";
import { mapState } from "vuex";
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import createLogger from 'vuex/dist/logger';
import Base from './views/Base.vue'
import router from './router';

Vue.use(Vuex);
Vue.use(iView);
// Vue.use(iEditor);

let v = new Vue({
    el: '#app',
    template: `
    <Base/>
    `,
    data: {
        name: 'lhf'
    },
    components: {Base},
    router: router,
})