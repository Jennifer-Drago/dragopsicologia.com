<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { seo } = useAppConfig();

useHead({ titleTemplate: `%s - ${seo?.siteName}` });

useSeoMeta({
  ogSiteName: seo.siteName,
  twitterCard: 'summary_large_image',
  ogImage: '/img/cover.png',
  twitterImage: '/img/cover.png',
});
</script>
