<!-- components/TaskInfo.vue -->
<script setup>
import { defineProps } from "vue";
// props : todo { no: 1, task: "Hit the gym", complete: false },
const props = defineProps(["todo"]);

// emit : checked 변경, 삭제요청에 대해 부모에게 올려야함
const emit = defineEmits(["taskChecked", "delTask"]);

const todoCompleted = () => {
  emit("taskChecked", props.todo.no);
};

const delTodo = () => {
  emit("delTask", props.todo.no);
};
</script>
<template>
  <li v-bind:class="{ checked: todo.complete }" v-on:click.self="todoCompleted">
    {{ todo.task }}
    <span class="close" v-on:click.stop="delTodo">X</span>
  </li>
</template>
