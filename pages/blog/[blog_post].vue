<script lang="ts" setup>
import { CustomParagraph, ProseH1 } from '#components';

const route = useRoute()

const { data } = await useAsyncData('blog_post',
  () => queryContent('blog/' + (route.params.blog_post)).findOne())
// const mdContent = await markdownParser.parse('md', data, {});

const components = {
  'custom-p': CustomParagraph,
  'prose-h1': ProseH1
}
</script>

<template>
  <div>
    <UContainer>Rendering from blog/[blog_post].vue</UContainer>
    <main>
      <UContainer>Rendering using ContentRenderer</UContainer>
      <template v-if="data">
        <ContentRenderer :value="data">
          <h1 class="text-2xl font-bold">{{ data.title }}</h1>
          <ContentRendererMarkdown :value="data" :components="components" />
        </ContentRenderer>
      </template>
      <template v-else>
        <p>No content found.</p>
      </template>
      <UContainer>Rendering ContentDoc</UContainer>
      <ContentDoc />
    </main>
  </div>
</template>


<style></style>