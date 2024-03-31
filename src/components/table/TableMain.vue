<template>
  <div class="table">
    <CardItem v-for="post of posts" :key="post?.id" :post="post" />
  </div>
</template>

<script setup lang="ts">
import CardItem from '../card/CardItem.vue'
import { type IPost } from '../../types/interfaces'

defineProps<{
  posts: IPost[]
}>()
</script>

<style lang="scss">
@import './table.scss';
</style>
