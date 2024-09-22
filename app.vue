<script setup lang="ts">
import { TopNavbar } from '#components';
const colorMode = useColorMode()

</script>

<template>
  <div class="flex w-full">
    <div class="flex w-5/6 justify-start">
      <TopNavbar />
    </div>
    <div class="flex w-1/6 justify-center">
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

