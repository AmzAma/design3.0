import { createApp } from 'vue'
import './index.css';
import App from './App.vue'
import 'vant/lib/index.css';
import './assets/css/style.scss'


import "amfe-flexible";
import { router }  from "./router";
import './assets/css/style.scss';
import {
  Tab, 
  Tabs,
  Tabbar,
  TabbarItem,
  Image as VanImage ,
  Icon,
  Field,
  Button,
  SwipeCell,
  Card,
  DropdownMenu,
  DropdownItem,
  Search ,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  NavBar,
  PullRefresh,
  Cell,
  CellGroup 
} from 'vant';


const app = createApp(App)
app.use(Tab);
app.use(Tabs);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Tab);
app.use(VanImage);
app.use(Tabs)
app.use(Field);
app.use(Icon);
app.use(Button);
app.use(NavBar);
app.use(Grid);
app.use(GridItem);
app.use(SwipeCell);
app.use(Card);
app.use(DropdownMenu);
app.use(DropdownItem);
app.use(NavBar);
app.use(VanImage);
app.use(Search);
app.use(Swipe);
app.use(SwipeItem);
app.use(Grid);
app.use(GridItem);
app.use(NavBar);
app.use(VanImage);
app.use(PullRefresh);
app.use(Cell);
app.use(CellGroup);

app.use(router);
app.mount('#app')

