<template>
  <div class="flex w-full border-b border-gray-200 dark:border-gray-800">
    <div class="flex grow justify-start px-2">
      <UHorizontalNavigation :links="links">
        <template #default="{ link }">
          <span class="group-hover:text-primary relative">{{ link.label }}</span>
        </template>
      </UHorizontalNavigation>
    </div>
    <div class="flex justify-end px-5 py-2  border-l border-gray-200 dark:border-gray-800">
      <ThemeSelect />
    </div>
  </div>
</template>
<script setup lang="ts">
const { data: navigation } = await useAsyncData(
  'navigation', () => fetchContentNavigation())

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