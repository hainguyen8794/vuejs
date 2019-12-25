// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  VueResource from'vue-resource'
Vue.config.productionTip = false
Vue.use(VueResource);
Vue.http.options.root= 'https://vueform-ffa27.firebaseio.com/';
Vue.http.interceptors.push ((request , next)=> {
     console.log(request);
     if (request.method == 'POST'){
       request.method = 'PUT'
    }
     next(response=>{
      response.json = ()=>{
        return {
          message : response.body
        }
      }
     })
 });

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
