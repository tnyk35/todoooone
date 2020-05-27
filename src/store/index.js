import Vue from 'vue'
import Vuex from 'vuex'

import todo from './todo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    todo,
  }
})

store.subscribe((mutations, state) => {
  localStorage.setItem('todooooo', JSON.stringify(state.todo.lists))
})

export default store