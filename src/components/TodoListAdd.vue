<template>
  <div class="todoList_add">
    <form class="todoList_addForm" @submit.prevent="addList">
      <input type="text" v-model="inputText" placeholder="List name">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['index'],
  data: function () {
    return {
      inputText: ''
    }
  },
  methods: {
    addList () {
      if (this.inputText.length > 0) {
        this.$store.commit('todo/addList', this.inputText)
        this.inputText = ''
      }
    }
  }
}
</script>

<style>
.todoList_add {
  padding-right: 20px;
}
.todoList_addForm {
  margin-left: 20px;
  width: 300px;
  background: #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  flex: 0 0 300px;
}
.todoList_add input[type="text"] {
  border: 0;
  width: calc(100% - 50px);
  box-sizing: border-box;
  line-height: 1.5;
  font-size: 17px;
  padding: 5px 20px;
  height: 40px;
  line-height: 30px;
}
.todoList_add button {
  background: #888;
  color: #fff;
  font-size: 17px;
  width: 50px;
  height: 40px;
  line-height: 40px;
  padding: 0 5px;
  text-align: center;
  border-radius: 0 5px 5px 0;
}
</style>