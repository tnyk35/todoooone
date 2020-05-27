<template>
  <div id="app">
    <div class="appTitle">
      <h1>ToDooooNE</h1>
    </div>
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  components: {
    TodoList
  }
}
</script>

<style>

html, body {
  margin: 0;
  height: 100%;
  color: #434343;
  font-family: 'Kosugi Maru', sans-serif;
}

input[type="text"],
button {
  appearance: none;
  border: 0;
  background: none;
  outline: none;
}
input[type="text"] {
  border: 1px solid #ddd;
  line-height: 1.8;
  padding: 0 10px;
  border-radius: 5px;
}
button {
  cursor: pointer;
}

h1 {
  font-family: 'Lalezar', cursive;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
}

.appTitle {
  height: 100px;
}

#app {
  background: linear-gradient(to right,#f2d50f, #da0641);
  width: 100%;
  height: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: scroll;
  position: relative;

}
</style>
