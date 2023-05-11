import axios from "axios";

export default {
  namespaced: true,
  state: {
    setting: [],
    data: {
      php_mail_email: "",
      php_mail_password: "",
      php_mail_email_from_name: "",
      smtp_email: "",
      smtp_password: "",
      smtp_email_host: "",
      smtp_email_port: "",
      email: "",
      logo: "",
      favicon: "",
      address_one: "",
      address_two: "",
      city: "",
      province: "",
      postal_code: "",
      country: "",
      time_zone: "",
      date_format: "",
      time_format: "",
      currency: "",
      google_analytics: "",
      google_adcence_code: "",
      facebook_messanger: "",
      display_facebook_pixel: "",
      google_rechaptcha_key: "",
      google_rechaptcha_secret: "",
      cookies_agreement: "",
      paypal_tokenization_key: "",
      paypal_merchant_id: "",
      paypal_public_key: "",
      paypal_private_key: "",
      paypal_app_id: "",
      paypal_secret_key: "",
      stripe_option: "",
      stripe_name: "",
      stripe_merchant_id: "",
      stripe_rest_id: "",
      seo_title: "",
      seo_description: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      google_client_id: "",
      google_client_secret: "",
      facebook_app_id: "",
      facebook_app_secret: "",
      twitter_client_id: "",
      twitter_client_secret: "",
    },
  },
  mutations: {
    /*set(state, setting) {
      state.setting = setting;
    },*/
  },
  getters: {
    /*get(state) {
      return state.setting;
    },*/
  },
  actions: {
    async update({ _ }, params) {
      try {
        console.log(params);
        const formData = new FormData();
        formData.append("email", params.email);
        formData.append("logo", params.logo);
        formData.append("favicon", params.favicon);
        formData.append("address_one", params.address_one);
        formData.append("address_two", params.address_two);
        formData.append("city", params.city);
        formData.append("province", params.province);
        formData.append("postal_code", params.postal_code);
        formData.append("country", params.country);
        formData.append("time_zone", params.time_zone);
        formData.append("date_format", params.date_format);
        formData.append("time_format", params.time_format);
        formData.append("currency", params.currency);
        formData.append(
          "paypal_tokenization_key",
          params.paypal_tokenization_key
        );
        formData.append("paypal_merchant_id", params.paypal_merchant_id);
        formData.append("paypal_public_key", params.paypal_public_key);
        formData.append("paypal_private_key", params.paypal_private_key);
        formData.append("paypal_app_id", params.paypal_app_id);
        formData.append("paypal_secret_key", params.paypal_secret_key);
        formData.append("stripe_option", params.stripe_option);
        formData.append("stripe_name", params.stripe_name);
        formData.append("stripe_merchant_id", params.stripe_merchant_id);
        formData.append("stripe_rest_id", params.stripe_rest_id);
        formData.append("php_mail_email", params.php_mail_email);
        formData.append("php_mail_password", params.php_mail_password);
        formData.append(
          "php_mail_email_from_name",
          params.php_mail_email_from_name
        );
        formData.append("smtp_email", params.smtp_email);
        formData.append("smtp_password", params.smtp_password);
        formData.append("smtp_email_host", params.smtp_email_host);
        formData.append("smtp_email_port", params.smtp_email_port);
        formData.append("google_client_id", params.google_client_id);
        formData.append("google_client_secret", params.google_client_secret);
        formData.append("facebook_app_id", params.facebook_app_id);
        formData.append("facebook_app_secret", params.facebook_app_secret);
        formData.append("twitter_client_id", params.twitter_client_id);
        formData.append("twitter_client_secret", params.twitter_client_secret);
        formData.append("facebook", params.facebook);
        formData.append("twitter", params.twitter);
        formData.append("linkedin", params.linkedin);
        formData.append("seo_title", params.seo_title);
        formData.append("seo_description", params.seo_description);
        formData.append("google_analytics", params.google_analytics);
        formData.append("google_adcence_code", params.google_adcence_code);
        formData.append("facebook_messanger", params.facebook_messanger);
        formData.append(
          "display_facebook_pixel",
          params.display_facebook_pixel
        );
        formData.append("google_rechaptcha_key", params.google_rechaptcha_key);
        formData.append(
          "google_rechaptcha_secret",
          params.google_rechaptcha_secret
        );
        formData.append("cookies_agreement", params.cookies_agreement);

        const response = await axios.post("/settings/1", formData);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Is Updated",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
};
