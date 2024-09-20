<script setup lang="ts">
import { CustomParagraph, TopNavbar } from '#components';

const { data } = await useAsyncData('page-data',
  () => queryContent('/blog').findOne())


const components = {
  'custom-p': CustomParagraph
}
</script>

<template>
  <UContainer>Rendering from pages/[...slug].vue</UContainer>

  <TopNavbar />

  <!-- TODO: Fix layout of color select -->
  <ColorScheme>
    <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
  </ColorScheme>

  <main>
    <ContentRenderer :value="data">
      <template #empty>
        <p>No content found.</p>
      </template>
      <h1>{{ data.title }}</h1>
      <ContentRendererMarkdown :value="data" :components="components" />
    </ContentRenderer>
  </main>
</template>