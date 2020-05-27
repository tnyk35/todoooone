<template>
  <div class="todoArea">
    <todo-add :index="index" />
    <draggable class="todo" :options="{ group: 'todos' }" v-model="todos">
      <div class="todo_item" v-for="(todo, idx2) in todos" :key="idx2">
        <div class="todo_text">{{ todo.text }}</div>
        <button class="todo_remove" @click="removeTodo(idx2)">ｘ</button>
      </div>
    </draggable>
  </div>
</template>


<script>
import draggable from 'vuedraggable'
import TodoAdd from './TodoAdd.vue'

export default {
  props: ['index'],
  components: {
    draggable,
    TodoAdd
  },
  computed: {
    todos: {
      get: function () {
        return this.$store.state.todo.lists[this.index].todos
      },
      set: function (value) {
        this.$store.commit('todo/setTodo', {index: this.index, todo: value})
      }
    }
  },
  methods: {
    removeTodo (index) {
      this.$store.commit('todo/removeTodo', {
        index1: this.index,
        index2: index
      })
    },
  },
}
</script>

<style>
.todoArea {
  padding: 10px;
}
.todo {
  min-height: 46px;
}
.todo_item {
  border: 1px solid #ccc;
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 5px;
  position: relative;
  background: #fff;
}
.todo_text {
  width: 100%;
  line-height: 1.5;
  padding-right: 1em;
  box-sizing: border-box;
  font-size: 14px;
}
.todo_remove {
  font-size: 20px;
  position: absolute;
  top: 4px;
  right: 0;
  opacity: 0.2;
}
.todo_remove:hover {
  transition: opacity 0.3s;
  opacity: 1;
}
</style>