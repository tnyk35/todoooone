<template>
  <form class="todoAdd" @submit.prevent="addTodo">
    <input type="text" v-model="inputText" placeholder="Todo / Task">
    <button type="submit">Add</button>
  </form>
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
    addTodo () {
      if (this.inputText.length > 0) {
        this.$store.commit('todo/addTodo', {
          index: this.index,
          todo: {
            text: this.inputText
          }
        })
        this.inputText = ''
      }
    }
  }
}
</script>

<style>
.todoAdd {
  margin-bottom: 20px;
}
.todoAdd input[type="text"] {
  font-size: 17px;
  width: calc(100% - 55px);
  box-sizing: border-box;
  vertical-align: middle;
  height: 32px;
  line-height: 22px;
  padding: 5px 10px;
}
.todoAdd input[type="text"]::placeholder {
  color: #ccc;
}
.todoAdd input[type="text"]::-ms-input-placeholder {
  color: #ccc;
}
.todoAdd input[type="text"]:-ms-input-placeholder {
  color: #ccc;
}
.todoAdd button {
  background: linear-gradient(to left,#f2d50f, #da0641);
  height: 32px;
  color: #fff;
  width: 50px;
  border-radius: 5px;
  margin-left: 5px;
  line-height: 32px;
  padding: 0 5px;
  font-size: 16px;
}
</style>