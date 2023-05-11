import store from "@/store";
import axios from "axios";

store.subscribe(mutation => {
  const { type, payload } = mutation;

  if (type === "Doctors/setToken" || type === "Auth/setToken") {
    const tokenName = type === "Doctors/setToken" ? "tokenDoctor" : "token";
    const tokenValue = payload ? `Bearer ${payload}` : null;

    axios.defaults.headers.common["Authorization"] = tokenValue;

    if (payload) {
      localStorage.setItem(tokenName, payload);
    } else {
      localStorage.removeItem(tokenName);
    }
  }
});

/*store.subscribe((mutation) => {
  if (mutation.type === "Doctors/setToken") {
    if (mutation.payload) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
      localStorage.setItem('tokenDoctor', mutation.payload);
    } else {
      axios.defaults.headers.common['Authorization'] = null
      localStorage.removeItem('tokenDoctor');
    }
  }
});


store.subscribe((mutation) => {
  if (mutation.type === "Auth/setToken") {
    if (mutation.payload) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
      localStorage.setItem('token', mutation.payload);
    } else {
      axios.defaults.headers.common['Authorization'] = null
      localStorage.removeItem('token');
    }
  }
});*/

