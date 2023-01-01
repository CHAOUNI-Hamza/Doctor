<template>
    <!-- start footer -->
        <footer class="footer">
          <div class="container-fluid">
            <footer class="site-footer">
              <div class="footer-top">
                <div class="row">
                  <div class="col-lg-3 col-md-6 lign">
                    <div class="footer-block">
                      <p class="footer-logo" style="font-size: 20px;">
                        <img class="img-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/The_Good_Doctor_logo_2.svg/2560px-The_Good_Doctor_logo_2.svg.png" alt="">
                      </p>
                      <div class="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      </div>
                      <ul class="social-icons">
                        <li>
                          <a href=""><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                        </li>
                        <li>
                          <a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                        </li>
                        <li>
                          <a href=""><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
                        </li>
                        <li>
                          <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 lign">
                    <div class="footer-links">
                      <h4 @click="showInformation = !showInformation" class="font-weight-bold">For Patients</h4>
                      <Transition>
                        <ul v-if="showInformation" class="list-unstyled p-0">
                          <li class="links mb-2 d-flex align-items-center" v-for="item in listsInformation" :key="item.id">
                            <font-awesome-icon class="mr-2" icon="fa-solid fa-angles-right" />
                            <a href="">{{ item.title }}</a>
                          </li>
                        </ul>
                    </Transition>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 lign">
                    <div class="footer-links">
                      <h4 class="font-weight-bold" @click="showQuickShop = !showQuickShop">For Doctors</h4>
                      <Transition>
                        <ul v-if="showQuickShop" class="list-unstyled p-0">
                          <li class="links mb-2 d-flex align-items-center" v-for="item in listsQuickShop" :key="item.id">
                            <font-awesome-icon class="mr-2" icon="fa-solid fa-angles-right" />
                            <a href="">{{ item.title }}</a>
                          </li>
                        </ul>
                      </Transition>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 lign">
                    <div class="footer-newletter">
                      <h4 class="font-weight-bold">Contact Us</h4>
                      <div class="footer-contact-info">
                        <div class="footer-address d-flex mb-2">
                          <span class="icon">
                            <font-awesome-icon class="mr-2" icon="fa-solid fa-location-dot" />
                          </span>
                          <p class="mb-0">
                            3556 Beech Street, San Francisco,California, CA 94108
                          </p>
                        </div>
                        <div class="footer-address d-flex mb-2">
                          <span class="icon">
                            <font-awesome-icon class="mr-2" icon="fa-solid fa-phone" />
                          </span>
                          <p>
                            
                            +212 6 10 20 52 13
                          </p>
                        </div>
                        <div class="footer-address d-flex mb-2">
                          <span class="icon">
                            <font-awesome-icon class="mr-2" icon="fa-solid fa-envelope" />
                          </span>
                          <p class="mb-0">
                            
                            chaounihamza19@gmail.com
                          </p>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-bottom">
                <div class="row justify-content-between">
                  <div class="col-md-5 left">
                    <p>
                      © 2022 Axi. All Rights Reserved. Ecommerce by Chaouni Designed by Hamza
                    </p>
                  </div>
                  <div class="col-md-3 right">
                    <p>
                      Terms and ConditionsPolicy
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </footer>
    <!-- end footer -->
    </template>
    
    <script>
    export default {
      components: {},
      data() {
        return {
            listsInformation: [
              {
                title: 'Search for Doctors',
                link: 'about'
              },
              {
                title: 'Login',
                link: 'contact'
              },
              {
                title: 'Register',
                link: ''
              },
              {
                title: 'Booking',
                link: ''
              },
              {
                title: 'Patient Dashboard',
                link: ''
              }
            ],
            listsQuickShop: [
              {
                title: 'Appointments',
                link: ''
              },
              {
                title: 'Chat',
                link: ''
              },
              {
                title: 'Login',
                link: ''
              },
              {
                title: 'Register',
                link: ''
              },
              {
                title: 'Doctor Dashboard',
                link: ''
              }
            ],
            listsCustomerServices: [
              {
                title: 'Help & FAQs',
                link: ''
              },
              {
                title: 'Returns Policy',
                link: ''
              },
              {
                title: 'Terms & Conditions',
                link: ''
              },
              {
                title: 'Privacy Policy',
                link: ''
              },
              {
                title: 'Support Center',
                link: ''
              }
            ],
            showInformation: true,
            showCustomerServices: true,
            showQuickShop: true,
            subscribe: {
              name:"subscribe",
              email: ''
            }
        }
      },
      methods: {
          footerResponsive() {
            if( window.innerWidth <= 562 ) {
              this.showInformation = false
              this.showCustomerServices = false
              this.showQuickShop = false
            }
          }
      },
      mounted() {
        this.footerResponsive()
      }
    }
    </script>
    
    <style scoped>
    .footer-bottom {
      padding-top: 30px;
    border-top: 1px solid #ffffff14;
    padding-bottom: 10px;
  }
  .footer-top {
      padding-bottom: 40px;
  }
    .footer {
        padding: 50px 30px 0 30px;
        background-color: #15558d;
        color: white;
    }
    .footer-logo {
        display: inline-block;
        margin-right: 30px;
        width: 160px;
    }
    .img-logo {
        max-width: 100%;
        height: auto;
    }
    .social-icons {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        font-size: 25px;
    }
    .social-icons li {
      margin-right: 15px;
    }

    a {
    color: #ffffff;
    text-decoration: none;
    background-color: transparent;
}
.links a {
  transition: 1s;
}
.links:hover a {
  margin-left: 10px;
}
    </style>
    
    
    
    