<template>
  <p>
    <!-- 아래 b태그랑 span태그랑 표시하는 방식이 같다. -->
    <b>{{ title }}</b
    ><span v-text="content"></span>
  </p>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});
</script>
