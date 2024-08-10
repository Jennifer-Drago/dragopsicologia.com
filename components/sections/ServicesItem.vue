<template>
  <div class="margin-bottom-24px-2">
    <content-renderer v-if="content" :value="content" />
  </div>
  <nuxt-link :to="link" class="button-color-1 w-button">Saber más</nuxt-link>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';

defineProps<{ content: ParsedContent; link: string }>();
</script>
