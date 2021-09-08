const layoutService = {
  state: {
    darkModeOn: localStorage.getItem('darkMode') === 'true',
  },
  getters: {
    darkModeOn: (state) => state.darkModeOn,
    darkModeClassBackground: (state) =>
      state.darkModeOn ? 'black-background' : 'white-background',
    darkModeClassFonts: (state) =>
      state.darkModeOn ? 'white-font' : 'black-font',
    darkModeClassTitle: (state) =>
      state.darkModeOn ? 'white-font-main' : 'dark-font-main',
    darkModeClassBgLightBlue: (state) =>
      state.darkModeOn ? 'dark-blue-background' : 'light-blue-background',
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
};

export default layoutService;
