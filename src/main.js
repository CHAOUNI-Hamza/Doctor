import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Globale Component
import NavbarFront from "./components/FrontEnd/NavbarFront.vue";
import FooterFront from "./components/FrontEnd/FooterFront.vue";
import GoToTopButton from "./components/FrontEnd/GoToTopButton.vue";

import MainSidebar from "./components/BackEnd/MainSidebar.vue";
import NavbarBack from "./components/BackEnd/NavbarBack.vue";
import MainFooterBack from "./components/BackEnd/MainFooterBack.vue";

// file style css
import style from "../public/style.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Pagination */

import DateFormat from "@voidsolutions/vue-dateformat";

/* import specific icons */
import {
  faUserSecret,
  faBars,
  faRepeat,
  faMagnifyingGlass,
  faBell,
  faPenToSquare,
  faTrashCan,
  faPlus,
  faArrowUpRightFromSquare,
  faGauge,
  faTableColumns,
  faCube,
  faUserPlus,
  faUsers,
  faSliders,
  faAngleDown,
  faRightFromBracket,
  faLocationDot,
  faHotel,
  faStar,
  faEnvelope,
  faPhone,
  faAnglesRight,
  faSackDollar,
  faCircleCheck,
  faCirclePlus,
  faXmark,
  faEye,
  faClipboardCheck,
  faPrint,
  faReply,
  faThumbsUp,
  faMicrophone,
  faThumbsDown,
  faPaperPlane,
  faVideo,
  faArrowUpFromBracket,
  faCaretUp,
  faArrowRight,
  faChevronRight,
  faPrescriptionBottleMedical,
  faCircle,
  faShieldHalved,
  faCircleInfo,
  faTag,
  faArrowRightLong,
  faArrowLeftLong,
  faBed,
  faBusinessTime,
  faHourglassStart,
  faFileInvoice,
  faUserDoctor,
  faCommentMedical,
  faGear,
  faShareNodes,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMoon,
  faSun,
  faAddressCard,
  faCircleXmark,
  faChartBar,
  faMessage,
  faUser,
  faFaceLaugh,
  faCreditCard,
  faClock,
  faCircleUp,
  faComment,
  faCommentDots,
  faHeart,
  faCalendarCheck
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faCalendarCheck,
  faBed,
  faBusinessTime,
  faRightFromBracket,
  faHourglassStart,
  faFileInvoice,
  faUserDoctor,
  faCommentMedical,
  faGear,
  faShareNodes,
  faUnlock,
  faUserSecret,
  faCommentDots,
  faArrowRightLong,
  faArrowLeftLong,
  faHeart,
  faCreditCard,
  faChevronRight,
  faCaretUp,
  faArrowRight,
  faComment,
  faVideo,
  faMicrophone,
  faPaperPlane,
  faEye,
  faPrint,
  faArrowUpFromBracket,
  faCommentDots,
  faXmark,
  faCircleInfo,
  faBars,
  faRepeat,
  faFaceLaugh,
  faShieldHalved,
  faClipboardCheck,
  faCircleCheck,
  faCirclePlus,
  faCircle,
  faThumbsUp,
  faThumbsDown,
  faPhone,
  faAnglesRight,
  faInstagram,
  faLocationDot,
  faEnvelope,
  faStar,
  faGoogle,
  faClock,
  faSackDollar,
  faAngleDown,
  faTag,
  faMoon,
  faFacebookF,
  faTwitter,
  faHotel,
  faLinkedinIn,
  faSun,
  faCircleXmark,
  faMessage,
  faPenToSquare,
  faTrashCan,
  faMagnifyingGlass,
  faPlus,
  faBell,
  faArrowUpRightFromSquare,
  faGauge,
  faAddressCard,
  faSliders,
  faPrescriptionBottleMedical,
  faUsers,
  faUserPlus,
  faCube,
  faTableColumns,
  faChartBar,
  faRightFromBracket,
  faUser,
  faReply,
  faCircleUp
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(style)
  .use(store)
  .use(router)
  .use(DateFormat)
  .component("NavbarFront", NavbarFront)
  .component("FooterFront", FooterFront)
  .component("GoToTopButton", GoToTopButton)
  .component("MainSidebar", MainSidebar)
  .component("NavbarBack", NavbarBack)
  .component("MainFooterBack", MainFooterBack)
  .mount("#app");



