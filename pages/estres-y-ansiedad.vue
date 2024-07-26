<template>
  <ContentRenderer
    :value="content || {}"
    :components="{ PostHero, PostSplitSection }"
  />
  <SectionsAppointment />
</template>

<script setup lang="ts">
import { PostHero, PostSplitSection } from '#components';
const { data: content } = await useAsyncData('service2', () =>
  queryContent('servicios', 'estres-y-ansiedad').findOne()
);
useHead({
  title: content.value?.metaTitle,
});
</script>
