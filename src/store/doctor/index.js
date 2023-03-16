import axios from '../../axios.config';

export default {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    addItem(state, item) {
      state.items.push(item);
    },
    updateItem(state, item) {
      const index = state.items.findIndex(i => i.id === item.id);
      if (index !== -1) {
        Vue.set(state.items, index, item);
      }
    },
    deleteItem(state, id) {
      state.items = state.items.filter(item => item.id !== id);
    }
  },
  getters: {},
  actions: {
    async fetchItems({ commit }) {
      const response = await axios.get('/items');
      commit('setItems', response.data);
    },
    async createItem({ commit }, item) {
      const response = await axios.post('/items', item);
      commit('addItem', response.data);
    },
    async updateItem({ commit }, item) {
      const response = await axios.put(`/items/${item.id}`, item);
      commit('updateItem', response.data);
    },
    async deleteItem({ commit }, id) {
      await axios.delete(`/items/${id}`);
      commit('deleteItem', id);
    }
  },
};
