const layoutService = {
  state: {
    darkModeOn: localStorage.getItem('darkMode') === 'true' ? true : false,
  },
  mutations: {
    toggleMode(state) {
      state.darkModeOn = !state.darkModeOn;
      localStorage.setItem('darkMode', state.darkModeOn);
    },
  },
  actions: {
    changeMode({ commit }) {
      commit('toggleMode');
    },
  },
  getters: {
    darkModeOn: (state) => state.darkModeOn,
  }
}

export default layoutService;