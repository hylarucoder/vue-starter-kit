export default {
  SET_TOKEN(state, accessToken) {
    state.accessToken = accessToken;
  },
  LOG_OUT(state) {
    localStorage.removeItem("accessToken");
    state.accessToken = null;
  }
};
