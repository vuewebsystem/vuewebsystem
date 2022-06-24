
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const  routes=[
   {
       path:'/',
       name:'Main',
       component:()=>import('../views/Main.vue'),
       children:[
                 {
                     path:'/SJTJ',
                     name:'SJTJ',
                     component:()=>import('../views/SJFX/SJTJ.vue')
                 },
                 {
                     path:'/YXYZFX',
                     name:'YXYZFX',
                     component:()=>import('../views/SJFX/YXYZFX.vue')
                 },
                 {
                    path:'/FZJC',
                    name:'FZJC',
                    component:()=>import('../views/FZJC/FZJC.vue')
                },
                {
                    path:'/AJCX',
                    name:'AJCX',
                    component:()=>import('../views/SJGL/AJCX.vue')
                },
                {
                    path:'/GMLXFX',
                    name:'GMLXFX',
                    component:()=>import('../views/SKFX/GMLXFX.vue')
                },
                {
                    path:'/RDFX',
                    name:'RDFX',
                    component:()=>import('../views/SKFX/RDFX.vue')
                },
                {
                    path:'/RLTFX',
                    name:'RLTFX',
                    component:()=>import('../views/SKFX/RLTFX.vue')
                },
                {
                    path:'/TBZT',
                    name:'TBZT',
                    component:()=>import('../views/TBZT/TBZT.vue')
                },
                {
                    path:'/XTSZ',
                    name:'XTSZ',
                    component:()=>import('../views/XTSZ/XTSZ.vue')
                },
                {
                    path:'/AJLR',
                    name:'AJLR',
                    component:()=>import('../views/SJGL/AJLR.vue')
                },
                {
                    path:'/YCYYJ',
                    name:'YCYYJ',
                    component:()=>import('../views/YCYYJ/YCYYJ.vue')
                }
               
             

       ]
   },
    {
       path:'/LOGIN',
       name:'LOGIN',
       component:()=>import('../views/LOGIN/LOGIN.vue')
    }


]
const router= new VueRouter({
         mode:'history',
         routes


})
export default router