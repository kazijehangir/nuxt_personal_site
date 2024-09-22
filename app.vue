<script setup lang="ts">
import { TopNavbar } from '#components';
const colorMode = useColorMode()

</script>

<template>
  <div class="flex justify-between">
    <TopNavbar />
    <!-- TODO: Fix layout of color select -->
    <ColorScheme>
      <USelect v-model="colorMode.preference" :options="['system', 'light', 'dark']" />
    </ColorScheme>
    <ThemeSelect />

  </div>

  <UContainer>
    <NuxtPage />
  </UContainer>
</template>

