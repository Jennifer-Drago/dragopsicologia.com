<template>
  <div>{{ slug }}</div>
</template>

<script setup lang="ts">
const router = useRouter();

const slug = computed(() => router.params.slug);
</script>
