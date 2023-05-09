import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue' //@
import MainBox from '../views/MainBox.vue' 
import routesConfig from './config'
import store from '../store/index'
const routes = [
  {
  path: '/login',
  name: 'login',
  component: Login
},{
  path: '/mainbox',
  name: 'mainbox',
  component: MainBox
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
 
//每次路由跳转之前都会执行这个函数
router.beforeEach((to, from, next) => {
  //如果要去的是登录页，直接放行
  if (to.name === 'login') {
    next()
  }else{
    //如果授权码存在，直接放行
    //未授权码，跳转到登录页
    if (!localStorage.getItem('token')) {
      next({
        path: '/login'
      })
    }else{
      //如果已经获取了路由，直接放行
      if(!store.state.isGeterRouter){
        ConfigRoutes()
        next({
          path: to.fullPath
        })
      }else{
        //如果没有获取路由，先获取路由，再放行
        next()
      }
    }
  }
}) 

const ConfigRoutes = ()=>{
  routesConfig.forEach(item => {
    router.addRoute('mainbox', item)
  }) 

  //改变isGeterRouter的状态为true
  store.commit('changeGetterRouter',true)
}

export default router
