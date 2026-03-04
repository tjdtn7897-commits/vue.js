<script setup></script>

<template>
  <h1>You did it!</h1>
  <p><RouterLink to="/watch">watch</RouterLink> |</p>
  <p><RouterLink to="/lifecycle">lifecycle</RouterLink> |</p>
  <p><RouterLink to="/parentComp">parentCompApp</RouterLink> |</p>
  <p><RouterLink to="/todo">todoList</RouterLink> |</p>
  <p><RouterLink to="/slot">slot</RouterLink> |</p>
  <RouterView />
</template>

<style scoped></style>
