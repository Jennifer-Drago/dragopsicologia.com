<template>
  <div class="hero-section">
    <div class="hero-block">
      <div class="w-layout-grid hero-grid">
        <div
          id="w-node-_6d39cf5a-51e3-1ee3-7505-56ce3d6006be-6c790f92"
          class="hero-column-1"
        >
          <div class="hero-title-block">
            <div class="hero-title-wrapper">
              <h1 class="hero-title-text">
                {{ homeContent.title1 }}&nbsp;<span class="colored-text">{{
                  homeContent.title2
                }}</span>
                <br />{{ homeContent.title3 }}
              </h1>
            </div>
            <nuxt-link to="/contacto" class="button-color-3 w-button">{{
              homeContent.cta
            }}</nuxt-link>
          </div>
          <div class="hero-footer">
            <div class="hero-contact-details-grid">
              <nuxt-link :to="`tel:${globalConfig.tel}`" class="link-2">{{
                globalConfig.tel
              }}</nuxt-link
              ><nuxt-link
                :to="`mailto:${globalConfig.mail}?subject=Mail%20de%20la%20web!`"
                class="link"
                >{{ globalConfig.mail }}</nuxt-link
              >
            </div>
          </div>
        </div>
        <div
          id="w-node-_6d39cf5a-51e3-1ee3-7505-56ce3d6006cb-6c790f92"
          class="hero-column-2"
        >
          <div class="promo-image-wrapper"></div>
        </div>
      </div>
    </div>
  </div>
  <SectionsServices />
  <SectionsAppointment />
  <SectionsPricing />
</template>

<script setup lang="ts">
const { seo, globalConfig } = useAppConfig();

useHead({
  titleTemplate: seo.siteName,
});

const { data: homeContent } = await useAsyncData('home', () =>
  queryContent('/').findOne()
);
</script>
