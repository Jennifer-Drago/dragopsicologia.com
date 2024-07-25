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
                ¡Hola! <span class="colored-text">Soy Jennifer Drago</span>
              </h1>
            </div>
            <nuxt-link to="/contacto" class="button-color-3 w-button"
              >Contacta conmigo</nuxt-link
            >
          </div>
          <div class="hero-footer">
            <div class="hero-contact-details-grid">
              <nuxt-link href="tel:+34634586724" class="link-2">{{
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
          id="w-node-f1bb315c-0ecb-78cd-69b5-f7fe67af9a97-7a790fb3"
          class="hero-column-2"
        >
          <div class="promo-image-wrapper"></div>
        </div>
      </div>
    </div>
    <div class="section-title-wrapper">
      <div class="section-grey-line"></div>
      <div class="section-colored-line-2"></div>
      <h1 class="section-title-text">Sobre mí</h1>
      <div class="section-colored-line-2"></div>
      <div class="section-grey-line"></div>
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
        />
      </div>
      <div class="w-richtext">
        <p>
          <strong
            >Soy Psicóloga desde hace más de diez años. Me apasiona entender la
            complejidad de las personas y acompañarlas en el camino a su
            bienestar. <br />‍</strong
          ><br />Desde que tenía apenas 11 años supe que quería ser psicóloga y
          a medida que crecía y aprendía más sobre el tema, más claro veía que
          ese era el camino que quería para mí. <br /><br />Me licencié en
          Psicología en 2011 por la Universidad de Barcelona y estoy acreditada
          como Psicóloga Sanitaria. Tras la licenciatura he seguido
          actualizándome y en formación continua para poder darte la mejor
          atención posible. <br /><br />Estoy aquí para ayudarte. Contacta
          conmigo y emprendamos junt@s el camino hacia tu bienestar.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Sobre mí',
});

const { globalConfig } = useAppConfig();
</script>
