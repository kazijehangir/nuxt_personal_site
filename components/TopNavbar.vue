<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
  <!-- 
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav> -->
</template>
<script setup lang="ts">

const { data: navigation } = await useAsyncData(
  'navigation', () => fetchContentNavigation())
// const links = 

const links = [
  [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Blog',
    icon: 'i-heroicons-chart-bar',
    to: `/blog`
  }, {
    label: 'Wiki',
    icon: 'i-heroicons-command-line',
    to: '/wiki'
  }], [{
    label: 'Projects',
    icon: 'i-heroicons-light-bulb'
  }, {
    label: 'Contact',
    icon: 'i-heroicons-question-mark-circle'
  }]
]

</script>