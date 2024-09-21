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
                {{ content?.heroTitle1 }}
                <span class="colored-text">{{ content?.heorTitle2 }}</span>
              </h1>
            </div>
            <nuxt-link to="/contacto" class="button-color-3 w-button">{{
              content?.cta
            }}</nuxt-link>
          </div>
          <div class="hero-footer">
            <div class="hero-contact-details-grid">
              <WhatsappNumberLink /><nuxt-link
                :to="`mailto:${globalConfig.mail}?subject=Mail%20de%20la%20web!`"
                class="link"
                >{{ globalConfig.mail }}</nuxt-link
              >
            </div>
          </div>
        </div>
        <div
          id="w-node-f1bb315c-0ecb-78cd-69b5-f7fe67af9a97-7a790fb3"
          class="hero-column-2"
        >
          <div class="promo-image-wrapper"/>
        </div>
      </div>
    </div>
    <div class="section-title-wrapper">
      <div class="section-grey-line"/>
      <div class="section-colored-line-2"/>
      <h1 class="section-title-text">{{ content?.title }}</h1>
      <div class="section-colored-line-2"/>
      <div class="section-grey-line"/>
    </div>
    <div class="about-wrapper w-clearfix">
      <div class="dynamic-image-wrapper">
        <img
          src="~/assets/img/62a998619e07d6680f80609a_profilePicture.jpg"
          srcset="
            ~/assets/img/62a998619e07d6680f80609a_profilePicture-p-500.jpeg   500w,
            ~/assets/img/62a998619e07d6680f80609a_profilePicture-p-800.jpeg   800w,
            ~/assets/img/62a998619e07d6680f80609a_profilePicture-p-1080.jpeg 1080w,
            ~/assets/img/62a998619e07d6680f80609a_profilePicture-p-1600.jpeg 1600w,
            ~/assets/img/62a998619e07d6680f80609a_profilePicture-p-2000.jpeg 2000w,
            ~/assets/img/62a998619e07d6680f80609a_profilePicture-p-2600.jpeg 2600w,
            ~/assets/img/62a998619e07d6680f80609a_profilePicture-p-3200.jpeg 3200w,
            ~/assets/img/62a998619e07d6680f80609a_profilePicture.jpg         4608w
          "
          alt=""
          sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1279px) 47vw, 44vw"
          class="dynamic-image"
        >
      </div>
      <div class="w-richtext">
        <div v-if="content">
          <ContentRenderer :value="content || {}" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { globalConfig } = useAppConfig();

const { data: content } = await useAsyncData('sobremi', () =>
  queryContent('/sobremi').findOne()
);

useHead({
  title: content.value?.title,
});
</script>
