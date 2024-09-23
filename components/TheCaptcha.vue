<template>
  <NuxtTurnstile
    :key="route.fullPath"
    ref="turnstile"
    v-model="token"
    :style="{ marginTop: '20px', marginBottom: '20px' }"
    :options="{ action: 'native', language: 'es' }"
  />
</template>

<script setup lang="ts">
const token = defineModel('token', { type: String });

const turnstile = useTemplateRef('turnstile');

defineExpose({ reset: () => turnstile.value?.reset || (() => {}) });

const route = useRoute();
watch(route, () => {
  turnstile.value.reset();
});
</script>
