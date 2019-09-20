const state = ({
  token: '',//app登录状态
  platform:{}
});
const getters = {
  include: (state) => (val) => {
    return state.value+' hahaha'
  }
  }
;
const mutations = {
  SET_TOKEN(state, value) {
    state.token = value;
  },
  SET_PLATFORM(state,value){
    state.platform=value
  }
};
const actions = {
  async getToken({state, commit}, val) {
    commit('SET_TOKEN', val);
  },
  async getPlatform({state, commit}, val){
    commit('SET_PLATFORM', val);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};