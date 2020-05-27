const savedList = localStorage.getItem('todooooo')

const state = {
  lists: savedList ? JSON.parse(savedList) : []
}

const mutations = {
  // リスト追加
  addList (state, name) {
    state.lists.push({
      name: name,
      todos: []
    })
  },
  // リスト削除
  removeList (state, index) {
    state.lists.splice(index, 1)
  },
  // リスト入れ替え
  setList (state, list) {
    state.lists = list
  },
  // Todo追加
  addTodo (state, {index, todo}) {
    state.lists[index].todos.push(todo)
  },
  // Todo削除
  removeTodo (state, {index1, index2}) {
    state.lists[index1].todos.splice(index2, 1)
  },
  // Todo入れ替え
  setTodo (state, {index, todo}) {
    state.lists[index].todos = todo
  },

  save (state) {
    localStorage.setItem('todooooo', JSON.stringify(state.lists))
  },
}

const actions = {
  doSave(context) {
    context.commit('save')
  },
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}