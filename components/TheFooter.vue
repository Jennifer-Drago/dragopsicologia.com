<template>
  <div class="footer-section">
    <div class="w-layout-grid footer-grid">
      <div class="footer-column-3">
        <div class="w-layout-grid footer-links-grid">
          <NuxtLink
            v-for="page in links"
            :key="page.link"
            :to="page.link"
            v-bind="{
              ...(isCurrent(page.link) && { ariaCurrent: 'page' }),
            }"
            class="footer-link w-button"
            :class="{
              'w--current': isCurrent(page.link),
            }"
            >{{ page.title }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// is Current
const router = useRouter();
const currentMatchedRoute = computed(() => router.currentRoute.value.matched);
const isCurrent = (routePath: string) =>
  currentMatchedRoute.value.some(
    (currentRoute) => currentRoute.path === routePath
  );

// Static data
const links = useAppConfig().links.footer || [];
</script>
