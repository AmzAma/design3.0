import { createApp } from 'vue'
import './index.css';
import App from './App.vue'
import 'vant/lib/index.css';
import './assets/css/style.scss'


import "amfe-flexible";
import { router }  from "./router";
import {
  Tab, 
  Tabs,
  Tabbar,
  TabbarItem,
  Image as VanImage ,
  Icon,
  Field,
  Button,
  Search ,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  NavBar,
} from 'vant';


const app = createApp(App)
app.use(Tab);
app.use(Tabs);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Field);
app.use(Icon);
app.use(Button);
app.use(Search);
app.use(Swipe);
app.use(SwipeItem);
app.use(Grid);
app.use(GridItem);
app.use(NavBar);
app.use(VanImage);

app.use(router);
app.mount('#app')

