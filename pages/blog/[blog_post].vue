<script lang="ts" setup>
import { CustomParagraph } from '#components';

const route = useRoute()

const { data } = await useAsyncData('blog_post',
  () => queryContent('blog/' + (route.params.blog_post)).findOne())
// const mdContent = await markdownParser.parse('md', data, {});

const components = {
  'custom-p': CustomParagraph
}
</script>

<template>
  <div>
    <UContainer>Rendering from blog/[blog_post].vue</UContainer>
    <main>
      <UContainer>Rendering using ContentRenderer</UContainer>
      <template v-if="data">
        <ContentRenderer :value="data">
          <h1>{{ data.title }}</h1>
          <ContentRendererMarkdown :value="data" />
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