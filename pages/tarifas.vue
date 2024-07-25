<template>
  <SectionsPricing :title="pricingPage?.title" />
</template>

<script setup lang="ts">
useHead({
  title: 'Tarifas',
});

const { data: pricingPage } = useAsyncData('pricingPage', () =>
  queryContent('/tarifas').findOne()
);
</script>
