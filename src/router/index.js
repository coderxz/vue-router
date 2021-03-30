// 路由器模块
import Vue from 'vue'
import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Message from "@/pages/Message";
import News from "@/pages/News";
import MessageDetaile from "@/pages/MessageDetaile";
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News,
        },
        {
          path:'/home/message',
          component:Message,
          children:[
            {
              path:'/home/message/detail:id',
              component:MessageDetaile,
            }
          ]
        }

      ]
    },
  ]
})