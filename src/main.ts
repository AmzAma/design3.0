import { createApp } from 'vue'
import './index.css';
import App from './App.vue'
import 'vant/lib/index.css';
import "amfe-flexible";
import { router }  from "./router";
import {
  Tabbar,
  TabbarItem,
  Icon,
  Field,
  Button,
  Tab, Tabs,
  Image as VanImage,
  Cell, CellGroup 
} from 'vant';


const app = createApp(App)
app.use(Tabbar);
app.use(TabbarItem);
app.use(Tab);
app.use(VanImage);
app.use(Tabs)
app.use(Field);
app.use(Icon);
app.use(Button);
app.use(Cell);
app.use(CellGroup);
app.use(router);
app.mount('#app')



