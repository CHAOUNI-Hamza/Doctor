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
                        <p>55 Gallaxy Enque,<br>2568 steet, 23568 NY
                        </p>
                        <p>
                          <b>Phone </b>: 06 55 72 81 55
                        </p>
                        <p>
                          <b>Email </b><a href="">: chaouni@gmail.com</a>
                        </p>
                      </div>
                      <ul class="social-icons">
                        <li>
                          <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>
                          <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li>
                          <a href=""><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
                        </li>
                        <li>
                          <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 lign">
                    <div class="footer-links">
                      <h4 @click="showInformation = !showInformation">INFORMATION v</h4>
                      <Transition>
                        <ul v-if="showInformation">
                          <li v-for="item in listsInformation" :key="item.id">
                            <a href="">qdsdqs</a>
                          </li>
                        </ul>
                    </Transition>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 lign">
                    <div class="footer-links">
                      <h4 @click="showQuickShop = !showQuickShop">QUICK SHOP v</h4>
                      <Transition>
                        <ul v-if="showQuickShop">
                          <li v-for="item in listsQuickShop" :key="item.id">
                            <a href="">qdsdqs</a>
                          </li>
                        </ul>
                      </Transition>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 lign">
                    <div class="footer-newletter">
                      <h4>NEWSLETTER</h4>
                      <p>
                        Enter your email to receive daily news and get 20% off coupon for all items.
                      </p>
                      <form>
                        <div class="mb-3">
                          <input 
                          v-model="subscribe.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"
                          >
                        </div>
                        <button type="submit" class="btn">SUBSCRIBE</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <!--<div class="footer-bottom">
                <div class="row justify-content-between">
                  <div class="col-md-5 left">
                    <p>
                      © 2022 Axi. All Rights Reserved. Ecommerce by Chaouni Designed by Hamza
                    </p>
                  </div>
                  <div class="col-md-3 right">
                    <ul>
                      <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMB6KwAcMDUZz3BiN7DD3vNksHmhiHlwQ8Qg&usqp=CAU" alt="">
                      </li>
                      <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMB6KwAcMDUZz3BiN7DD3vNksHmhiHlwQ8Qg&usqp=CAU" alt="">
                      </li>
                      <li>
                        <img src="https://lesalarie.ma/wp-content/uploads/2021/12/mastercard-logo-wallpapers-3-1101x570.png" alt="">
                      </li>
                      <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png" alt="">
                      </li>
                    </ul>
                  </div>
                </div>
              </div>-->
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
                title: 'About us',
                link: 'about'
              },
              {
                title: 'Contact Us',
                link: 'contact'
              },
              {
                title: 'Career',
                link: ''
              },
              {
                title: 'My Account',
                link: ''
              },
              {
                title: 'Orders and Returns',
                link: ''
              }
            ],
            listsQuickShop: [
              {
                title: 'Fashion',
                link: ''
              },
              {
                title: 'Men',
                link: ''
              },
              {
                title: 'Furniture',
                link: ''
              },
              {
                title: 'Home',
                link: ''
              },
              {
                title: 'Home Decor',
                link: ''
              },
              {
                title: 'Shoes',
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
    .footer {
        padding: 80px;
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
    </style>
    
    
    
    