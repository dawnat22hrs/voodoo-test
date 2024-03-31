<template>
  <main>
    <SearchInput v-model="searchValue" />
    <div v-if="loadingCounter">Loading...</div>
    <TableMain :posts="queryPosts" v-else />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import SearchInput from '../../components/search-input/SearchInput.vue'
import TableMain from '../../components/table/TableMain.vue'
import { type IPost } from '@/types/interfaces'
import { enrichPostsWithUser } from '../../utils/utils'
import api from '@/api/api'

const searchValue = ref('')
const posts = ref<IPost[]>([])
const loadingCounter = ref(true)

const queryPosts = computed(() =>
  posts.value.filter((post: IPost) => post.user?.name.indexOf(searchValue.value) !== -1)
)

onMounted(async () => {
  const usedPosts = await api.getPosts()
  posts.value = await enrichPostsWithUser(usedPosts)
  loadingCounter.value = false
})
</script>

<style lang="scss">
@import './home.scss';
</style>
