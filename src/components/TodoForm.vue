<template>
  <div class="my-4 flex justify-between">
    <input type="text"
           v-model="title"
           class=" rounded-md border border-blue-100 bg-gray-50" placeholder="Enter TODO"/>
    <button type="button" class="ml-2 bg-blue-100 px-4 py-2 text-blue-600 rounded-md" @click="addTodo">
      Add
    </button>
  </div>

</template>

<script setup>

import {useTodoListStore} from "../stores/toDoList.js";
import {ref} from "vue";

const todoListStore = useTodoListStore();

const title = ref("");

const addTodo = () => {
  todoListStore.addTodoItem({
    id: Math.random(),
    title: title.value,
    completed: false
  });

  title.value = "";
}

</script>

