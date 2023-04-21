import store from "@/store";
import axios from "axios";

/*store.subscribe((mutation) => {
  if (mutation.type === "Doctors/setToken") {
    if (mutation.payload) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${mutation.payload}`;
      localStorage.setItem("token", mutation.payload);
    } else {
      axios.defaults.headers.common["Authorization"] = null;
      localStorage.removeItem("token");
    }
  }
});*/

store.subscribe((mutation) => {
  if (mutation.type === "Auth/setToken") {
    if (mutation.payload) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${mutation.payload}`;
      localStorage.setItem("token", mutation.payload);
    } else {
      axios.defaults.headers.common["Authorization"] = null;
      localStorage.removeItem("token");
    }
  }
});
