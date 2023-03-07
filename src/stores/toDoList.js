import {defineStore} from "pinia";

export const useTodoListStore = defineStore("todoList", {
    state: () => ({
        todoList: [],
    }),
    actions: {
        addTodoItem(todoItem) {
            this.todoList.push(todoItem);
        },
        removeTodoItem(id) {
            this.todoList = this.todoList.filter((item) => item.id !== id);
        },
        clearTodoList() {
            this.todoList = [];
        },
        toggleTodoItem(id) {
            this.todoList = this.todoList.map((item) => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
                return item;
            });
        }
    },
    getters: {
        todoListCount() {
            return this.todoList.length;
        },

        getTodoItem(index) {
            return this.todoList[index];
        },
        getTodoList() {
            return this.todoList;
        },
        getCompletedTodos() {
            return this.todoList.filter(item => item.completed);
        },
        getCompletedTodosCount() {
            return this.getCompletedTodos.length;
        }

    }
});