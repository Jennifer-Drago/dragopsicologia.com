<template>
  <div class="licensing-section">
    <div class="section-title-wrapper">
      <div class="section-grey-line"/>
      <div class="section-colored-line-1"/>
      <h1 class="section-title-text">Aviso legal</h1>
      <div class="section-colored-line-1"/>
      <div class="section-grey-line"/>
    </div>
    <div class="rich-text-block-3 w-richtext">
      <ContentRenderer :value="content || {}" :data="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: content } = useAsyncData('legal', () =>
  queryContent('/aviso-legal').findOne()
);

useHead({
  title: content.value?.title,
});

const data = computed(() => useAppConfig().globalConfig);
</script>
