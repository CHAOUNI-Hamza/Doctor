import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Globale Component
import NavbarFront from './components/FrontEnd/NavbarFront.vue'
import FooterFront from './components/FrontEnd/FooterFront.vue'

// file style css
import style from '../public/style.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faUserSecret,
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
    faXmark
} from '@fortawesome/free-solid-svg-icons'
import { faMoon, faSun, faAddressCard, faCircleXmark, faChartBar, faMessage, faUser, faClock } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
    faUserSecret,
    faCircleCheck,
    faXmark,
    faCirclePlus,
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
    faUsers,
    faUserPlus,
    faCube,
    faTableColumns,
    faChartBar,
    faRightFromBracket,
    faUser
    )

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(style)
.use(store)
.use(router)
.component('NavbarFront', NavbarFront)
.component('FooterFront', FooterFront)
.mount('#app')
