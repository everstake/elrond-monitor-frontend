const layoutService = {
  state: {
    darkModeOn: false,
  },
  mutations: {
    toggleMode(state) {
      state.darkModeOn = !state.darkModeOn;
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