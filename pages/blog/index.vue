<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content'

const route = useRoute()

// const query = queryContent('blog').sort({ date: -1 })

const query: QueryBuilderParams = { path: 'blog', limit: 5, sort: [{ date: -1 }] }

</script>

<template>
  <main>
    <ContentList :query="query">
      <template #default="{ list }">
        <div v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
          <p>{{ article.description }}</p>
        </div>
        <!-- ...default slot -->
      </template>
      <template #not-found>
        <p>No posts found.</p>
      </template>
    </ContentList>
  </main>
</template>



<style></style>