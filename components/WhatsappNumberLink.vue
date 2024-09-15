<template>
  <a :href="`https://wa.me/${formattedPhoneNumber}`">{{ globalConfig.tel }}</a>
</template>

<script setup lang="ts">
const { globalConfig } = useAppConfig();

const formattedPhoneNumber = globalConfig.tel
  ?.replace(/\s/g, '')
  .replace(/^\+/, '')
  .replace(/-/g, '')
  .replace(/\(/g, '')
  .replace(/\)/g, '')
  .replace(/^0/g, '');
</script>
