<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { seo } = useAppConfig();

useHead({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image',
});
</script>
