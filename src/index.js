import Alert from "./components/alert";
import AutoComplete from "./components/autocomplete";
import Audio from "./components/audio";
import Badge from "./components/badge";
import Box from "./components/box";
import {Breadcrumb, BreadcrumbItem} from "./components/breadcrumb";
import {Button, ButtonGroup} from "./components/button";
import { Card, CardDiy } from "./components/card";
import {Carousel, CarouselItem} from "./components/carousel";
import Cascader from "./components/cascader";
import Chart from "./components/chart";
import Charts from "./components/charts";
import {Checkbox, CheckboxGroup, CheckboxButton} from "./components/checkbox";
import {Col, Row} from "./components/grid";
import {Collapse, CollapseItem} from "./components/collapse";
import {RoleCollapse, RoleCollapseItem} from "./components/role-collapse";
import {DatePicker, TimePicker, TimeSelect} from "./components/date-picker";
import Dialog from "./components/dialog";
import {Dropdown, DropdownItem, DropdownMenu, MenuDropdown} from "./components/dropdown";
import {Form, FormItem} from "./components/form";
import Go from './components/go'
import { SGrid, SGridItem } from './components/grid-flex';
import Input from "./components/input";
import InputNumber from "./components/input-number";
import Loading from "./components/loading";
import {Menu, MenuGroup, MenuItem, Submenu} from "./components/menu";
import Message from "./components/message";
import MessageBox from "./components/message-box";
import Notification from "./components/notification";
import Pagination from "./components/pagination";
import PageInfinite from './components/pagination/Page-infinite.vue';
import Popover from "./components/popover";
import Progress from "./components/progress";
import Rate from "./components/rate";
import {Radio,RadioButton,RadioGroup} from "./components/radio";
import Scrollbar from "./components/scrollbar";
import Slider from "./components/slider";
import {Steps, Step} from "./components/steps";
import Switch from "./components/switch";
import SearchGroup from "./components/search-group";

import {sTable, sTableColumn} from "./components/table";
import TablePage from './components/table-page';
import {Tabs, TabPane} from "./components/tabs";
import Tag from "./components/tag";
import Tooltip from "./components/tooltip";
import Transfer from "./components/transfer";
import Tree from "./components/tree";
import{Option, OptionGroup, Select, SelectDropdown}from "./components/select";
import Upload from "./components/upload";
import TableTree from './components/table-tree'
import LoadingBar from './components/loading-bar'
import {Timeline, TimelineItem} from "./components/timeline";
import Spinner from './components/spin';
import Drawer from './components/drawer';
import EventBus from './components/eventbus/event-bus'

import './theme-chalk/index.less'
import './theme-dark/index.less'
import './theme-tea/index.less'
import './theme-fanta/index.less'

import './components/table/package/index'//模拟滚动
const components = [
    Alert,
    AutoComplete,
    Audio,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Card,
    CardDiy,
    Carousel,
    CarouselItem,
    Cascader,
    Chart,
    Charts,
    Checkbox,
    CheckboxGroup,
    CheckboxButton,
    Col,
    Collapse,
    CollapseItem,
    RoleCollapse,
    RoleCollapseItem,
    DatePicker,
    Dialog,
    Dropdown,
    Box,
    DropdownItem,
    DropdownMenu,
    Form,
    FormItem,
    Go,
    SGrid,
    SGridItem,
    Input,
    InputNumber,
    Menu,
    MenuDropdown,
    MenuGroup,
    MenuItem,
    MessageBox,
    Pagination,
    PageInfinite,
    Popover,
    Progress,
    Rate,
    Row,
    Radio,
    RadioButton,
    RadioGroup,
    Scrollbar,
    SearchGroup,
    Slider,
    Steps,
    Step,
    Submenu,
    Switch,
    sTable,
    sTableColumn,
    TablePage,
    Tabs,
    TabPane,
    Tag,
    TimePicker,
    TimeSelect,
    Tooltip,
    Transfer,
    Tree,
    Option,
    OptionGroup,
    Select,
    SelectDropdown,
    Upload,
    TableTree,
    LoadingBar,
    Timeline,
    TimelineItem,
    Spinner,
    Drawer
];

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
  components.map(component => {
    if (component.name) {
      Vue.component(component.name, component);
    }
  });

  Vue.use(Loading.directive);

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$audio = Audio;
  Vue.prototype.$message = Message;
  window.$message = Message;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$warning = MessageBox;
  Vue.prototype.$Loading = LoadingBar;
  Vue.prototype.$eventBus = EventBus;

  Vue.directive("popover", Popover.directive);

};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Alert,
  AutoComplete,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  Chart,
  Charts,
  Checkbox,
  CheckboxGroup,
  CheckboxButton,
  Col,
  Collapse,
  CollapseItem,
  RoleCollapse,
  RoleCollapseItem,
  DatePicker,
  Dialog,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Input,
  InputNumber,
  Loading,
  Menu,
  MenuDropdown,
  MenuGroup,
  MenuItem,
  Message,
  MessageBox,
  Notification,
  Pagination,
  PageInfinite,
  Popover,
  Progress,
  Rate,
  Radio,
  RadioButton,
  RadioGroup,
  Row,
  Scrollbar,
  SearchGroup,
  Slider,
  Steps,
  Step,
  Submenu,
  Switch,
  sTable,
  sTableColumn,
  Tabs,
  TabPane,
  Tag,
  TimePicker,
  TimeSelect,
  Tooltip,
  Transfer,
  Tree,
  Option,
  OptionGroup,
  Select,
  SelectDropdown,
  Upload,
  TableTree,
  LoadingBar,
  Timeline,
  TimelineItem,
  Spinner,
  Drawer,
  EventBus
}
