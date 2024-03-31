<template>
  <div class="card">
    <h3 class="title">{{ post.title }}</h3>
    <span class="text">
      {{ post.body }}
    </span>
    <span class="name">{{ post.user.name }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  post: any
}>()
</script>

<style lang="scss">
@import './card-item.scss';
</style>
