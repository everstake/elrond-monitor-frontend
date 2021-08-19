const layoutService = {
  state: {
    darkModeOn: localStorage.getItem('darkMode') === 'true',
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
    darkModeClassBackground: (state) =>
      state.darkModeOn ? 'black-background' : 'white-background',
    darkModeClassFonts: (state) =>
      state.darkModeOn ? 'white-font' : 'black-font',
  },
};

export default layoutService;
