<template>
  <ul>
    <todo-item v-if="todoStore.todoListCount >0" v-for="item in todoStore.getTodoList.filter(i=>!i.completed)"
               @mark-todo="markTodo"
               @remove-todo="removeTodo"
               :item="item"/>
    <li v-else class="text-red-500 my-4 bg-red-50 p-2 rounded">No Todos</li>
  </ul>
  <h6>
    Completed Todos ({{ todoStore.getCompletedTodosCount }})
  </h6>
  <ul>
    <todo-item v-if="todoStore.getCompletedTodosCount >0" v-for="item in todoStore.getCompletedTodos"
               @mark-todo="markTodo"
               @remove-todo="removeTodo"
               :item="item"/>
    <li v-else class="text-red-500 my-4 bg-red-50 p-2 rounded">
      No Completed Todos
    </li>
  </ul>
</template>

<script setup>

import {useTodoListStore} from "../stores/toDoList.js";
import TodoItem from "./TodoItem.vue";

const todoStore = useTodoListStore();

const removeTodo = (id) => {
  todoStore.removeTodoItem(id);
}

const markTodo = (id) => {
  todoStore.toggleTodoItem(id);
}


</script>