import { createApp } from 'vue'
import './index.css';
import App from './App.vue'
import 'vant/lib/index.css';

import "amfe-flexible";
import { router }  from "./router";
import {
  Tabbar,
  TabbarItem,
  NavBar,
  DropdownMenu,
  DropdownItem,
  Icon,
  Image as VanImage,
} from 'vant';


const app = createApp(App)
app.use(Tabbar);
app.use(TabbarItem);
app.use(NavBar);
app.use(DropdownMenu);
app.use(DropdownItem);
app.use(Icon);
app.use(VanImage);

app.use(router);
app.mount('#app')


