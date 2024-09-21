<template>
  <div class="changelog-section">
    <div class="section-title-wrapper">
      <div class="section-grey-line"/>
      <div class="section-colored-line-3"/>
      <h1 class="section-title-text">{{ content?.title }}</h1>
      <div class="section-colored-line-3"/>
      <div class="section-grey-line"/>
    </div>
    <ContentRenderer :value="content || {}" :data="data" class="paragraph" />
  </div>
</template>

<script setup lang="ts">
const { data: content } = await useAsyncData('politicaDePrivacidad', () =>
  queryContent('/politica-de-privacidad').findOne()
);

useHead({
  title: content.value?.title,
});

const data = computed(() => useAppConfig().globalConfig);
</script>
