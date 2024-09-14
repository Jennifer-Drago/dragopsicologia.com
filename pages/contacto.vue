<template>
  <div class="contact-section">
    <div class="section-title-wrapper">
      <div class="section-grey-line"></div>
      <div class="section-colored-line-2"></div>
      <h1 class="section-title-text">{{ contactContent?.title }}</h1>
      <div class="section-colored-line-2"></div>
      <div class="section-grey-line"></div>
    </div>
    <div class="w-layout-grid contact-grid">
      <div
        id="w-node-_2afda74d-78cb-04bc-e6b1-b15c2611377b-82790fa4"
        class="contact-form-wrapper w-form"
      >
        <ServicesTheForm :title="contactContent?.formTitle || 'Contáctame'" />
      </div>
    </div>
    <div class="w-layout-grid contact-grid-info">
      <div
        id="w-node-_1ec54a27-512b-b24b-81a5-293751501710-82790fa4"
        class="contact-info-text"
      >
        <strong>Teléfono: </strong> {{ globalConfig.tel }}
      </div>
      <div
        id="w-node-b604fd82-1fd5-8241-5cba-f261c8da9ef7-82790fa4"
        class="contact-info-text"
      >
        <strong>Email:</strong> {{ globalConfig.mail }}
      </div>
      <!-- <div
        v-if="globalConfig.address"
        id="w-node-a5607c4e-3f8d-a6eb-651a-f019b0397e8a-82790fa4"
        class="contact-info-text"
      >
        <strong>Dirección:</strong> {{ globalConfig.address }}
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const { globalConfig } = useAppConfig();

const { data: contactContent } = useAsyncData('contactPage', () =>
  queryContent('/contacto').findOne()
);

useHead({
  title: contactContent.value?.title,
});
</script>
