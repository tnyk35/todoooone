<template>
  <div>
    <draggable class="todoListArea" :options="{ group: 'lists' }" v-model="lists">
      <div class="todoList" v-for="(list, idx1) in lists" :key="idx1">
        <button class="todoList_remove" @click="removeList(idx1)">ｘ</button>
        <h2 class="todoList_title">{{ list.name }}</h2>
        <todo :index="idx1" />
      </div>
      <todo-list-add />
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Todo from './Todo.vue'
import TodoListAdd from './TodoListAdd.vue'

export default {
  components: {
    draggable,
    Todo,
    TodoListAdd
  },
  computed: {
    lists: {
      get: function () {
        return this.$store.state.todo.lists
      },
      set: function (value) {
        this.$store.commit('todo/setList', value)
        this.$store.dispatch('todo/doSave')
      }
    }
  },
  methods: {
    removeList (index) {
      this.$store.commit('todo/removeList', index)
    }
  }
}
</script>

<style scoped>
.todoListArea {
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
}

.todoList {
  margin-left: 20px;
  background: #fff;
  box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.05);
  border-radius: 5px;
  position: relative;
  width: 300px;
  flex: 0 0 300px;
}
.todoList:first-child {
  margin-left: 0;
}

.todoList_remove {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 16px;
  opacity: 0.2;
}
.todoList_remove:hover {
  transition: opacity .3s;
  opacity: 1;
}

.todoList_title {
  margin: 0;
  font-size: 16px;
  padding: 10px 10px;
  border-bottom: 1px solid #ddd;
}
</style>