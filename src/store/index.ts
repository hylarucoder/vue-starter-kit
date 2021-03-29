import { createStore } from "vuex"

const state = {
  count: 0,
}

const mutations = {
  increment: (state) => {
    state.count++
    state.history.push("increment")
  },
  decrement: (state) => {
    state.count--
    state.history.push("decrement")
  },
}

const actions = {
  async add(ctx) {},
}

export default createStore({
  state,
  mutations,
  actions,
  modules: {},
})
