import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import UserProfile from './components/UserProfile.vue'
import UserPost from './components/UserPost.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
   {path: "/", component: Home, name: "home"}, 
   {path: "/user/:id", component: UserProfile, name: "userProfile"}, 
   {path: "/user/:userId/posts", component: UserPost}, 
  ],
  mode: "history"
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
