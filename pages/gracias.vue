<template>
  <div class="about-section">
    <div class="hero-block">
      <div class="w-layout-grid hero-grid">
        <div
          id="w-node-f1bb315c-0ecb-78cd-69b5-f7fe67af9a85-7a790fb3"
          class="hero-column-1"
        >
          <div class="hero-title-block">
            <div class="hero-title-wrapper">
              <h1 class="hero-title-text">
                {{ content?.heroTitle }}
              </h1>
              <p>
                {{ content?.heroSubtitle }}
              </p>
            </div>
            <nuxt-link to="/" class="button-color-3 w-button">{{
              content?.cta
            }}</nuxt-link>
          </div>
        </div>
        <div class="hero-column-2">
          <div class="promo-image-wrapper"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: content } = await useAsyncData('gracias', () =>
  queryContent('/gracias').findOne()
);

useHead({
  title: content.value?.title,
});
</script>
