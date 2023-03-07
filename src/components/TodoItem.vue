<template>
  <li class="flex items-center hover:cursor-pointer justify-between my-2"
      @click="markTodo(item.id)">
      <span>
        <input type="checkbox" class="mr-2" v-model="item.completed"/>
      <span :class="{'line-through': item.completed}">{{ item.title }}</span>
      </span>
    <button @click="removeTodo(item.id)" type="button"
            class="ml-2 bg-red-100 text-red-600 py-2 items-center flex px-4 rounded-full hover:bg-red-500 hover:text-white">
      x
    </button>
  </li>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
let emit = defineEmits(['removeTodo', 'markTodo']);

const removeTodo = (id) => {
  emit('removeTodo', id);
}

const markTodo = (id) => {
  emit('markTodo', id);
}


</script>

<style scoped>

</style>