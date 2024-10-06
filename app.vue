<script setup lang="ts">
import { TopNavbar } from '#components';
const colorMode = useColorMode()

</script>

<template>
  <div class="flex w-full border-b border-gray-200 dark:border-gray-800">
    <div class="flex grow justify-start px-2">
      <TopNavbar />
    </div>
    <div class="flex justify-end px-5 py-2  border-l border-gray-200 dark:border-gray-800">
      <ThemeSelect />
    </div>
    <!-- TODO: Fix layout of color select -->
    <!-- <ColorScheme>
      <USelect v-model="colorMode.preference" :options="['system', 'light', 'dark']" />
    </ColorScheme> -->
  </div>

  <UContainer>
    <NuxtPage />
  </UContainer>
</template>

