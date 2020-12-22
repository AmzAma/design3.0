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
<<<<<<< HEAD
  Icon
=======
  DropdownMenu,
  DropdownItem,
  Icon,
  Image as VanImage,
>>>>>>> wjy
} from 'vant';


const app = createApp(App)
app.use(Tabbar);
app.use(TabbarItem);
app.use(NavBar);
<<<<<<< HEAD
app.use(Icon);
=======
app.use(DropdownMenu);
app.use(DropdownItem);
app.use(Icon);
app.use(VanImage);

>>>>>>> wjy
app.use(router);
app.mount('#app')


