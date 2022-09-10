import Vue from 'vue'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver, extend, validate } from 'vee-validate'




Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


