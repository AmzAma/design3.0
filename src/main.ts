import { createApp } from 'vue'
import './index.css';
import App from './App.vue'
import 'vant/lib/index.css';


import "amfe-flexible";
import { router }  from "./router";
import './assets/css/style.scss';
import {
  Tabbar,
  TabbarItem,
  Icon,
  Field,
  Button,
  NavBar,
  Grid,
  GridItem,
  SwipeCell,
  Card,
  Image as VanImage
} from 'vant';


const app = createApp(App)
app.use(Tabbar);
app.use(TabbarItem);
app.use(Field);
app.use(Icon);
app.use(Button);
app.use(NavBar);
app.use(Grid);
app.use(GridItem);
app.use(SwipeCell);
app.use(Card);
app.use(VanImage);
app.use(router);
app.mount('#app')

