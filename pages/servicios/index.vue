<template>
  <div>
    <SectionsServices />
    <SectionsAppointment />
    <SectionsPricing />
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('servicePage', () =>
  queryContent('/servicios').findOne()
);

useHead({
  title: page.value?.title,
});
</script>
