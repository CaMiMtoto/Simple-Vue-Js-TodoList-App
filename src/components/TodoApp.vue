<template>
  <div class="p-10  flex flex-col min-h-screen items-center justify-center w-full">
    <h1 class="text-blue-500 font-bold">
      To Do List ({{ todoStore.todoListCount }})
    </h1>
    <todo-form/>
    <todo-list/>
  </div>

</template>

<script setup>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
import {useTodoListStore} from "../stores/toDoList.js";

const todoStore = useTodoListStore();
</script>