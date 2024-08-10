<template>
  <SectionsPricing :is-page="true" />
</template>

<script setup lang="ts">
const { data: page } = useAsyncData('pricingPage', () =>
  queryContent('/tarifas').findOne()
);

useHead({
  title: page.value?.title,
});
</script>
