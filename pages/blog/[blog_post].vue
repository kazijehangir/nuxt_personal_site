<script lang="ts" setup>
import { CustomParagraph } from '#components';

const route = useRoute()

const { data } = await useAsyncData('blog_post',
  () => queryContent('blog/' + (route.params.blog_post)).findOne())

const components = {
  'custom-p': CustomParagraph
}
</script>

<template>
  <div>
    <UContainer>Rendering from blog/[blog_post].vue</UContainer>
    <main>
      <template v-if="data">
        <ContentRenderer :value="data">
          <h1>{{ data.title }}</h1>
          <ContentRendererMarkdown :value="data" :components="components" />
        </ContentRenderer>
      </template>
      <template v-else>
        <p>No content found.</p>
      </template>
    </main>
  </div>
</template>


<style></style>