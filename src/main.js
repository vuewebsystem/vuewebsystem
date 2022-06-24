import Vue from 'vue'
import App from './App.vue'
import { Button,Radio,Container,Main,Header,Aside,Menu,Submenu,MenuItemGroup,MenuItem,Dropdown,DropdownMenu,DropdownItem,Row,Col,Card,Table,TableColumn,Input,Form,FormItem,Option, OptionGroup,Upload, Message, MessageBox} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'
import router from  '../router'
import http from 'axios'
import '../api1/mock.js'
import store from '../store'



Vue.config.productionTip=false

Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Upload)
Vue.prototype.$http=http
Vue.prototype.$confirm=MessageBox.confirm
Vue.prototype.$message=Message

router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const token=store.state.user.token
  if(!token&& to.name!=='LOGIN'){
    next({name:'LOGIN'})
  }else{
    next();
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
