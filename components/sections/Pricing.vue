<template>
  <section class="pricing-overview">
    <div class="container">
      <div class="section-title-wrapper">
        <div class="section-grey-line"></div>
        <div class="section-colored-line-1"></div>
        <component :is="isPage ? 'h1' : 'h2'" class="section-title-text">{{
          pricingPage?.title
        }}</component>
        <div class="section-colored-line-1"></div>
        <div class="section-grey-line"></div>
      </div>
      <div class="pricing-grid">
        <div
          id="w-node-_3474d4dd-b4aa-ff76-9e07-fc728b1ff3a1-8b1ff394"
          class="pricing-card-three"
        >
          <div>
            <div class="pricing-title-wrapper w-container">
              <h3>Terapia individual</h3>
              <ul role="list" class="list w-list-unstyled">
                <li class="list-item">Online: 60€</li>
              </ul>
            </div>
            <p class="pricing-card-text">
              Las sesiones individuales tienen una duración aproximada de 50
              minutos.
            </p>
          </div>
        </div>
        <div
          id="w-node-f46781b5-afa5-1337-bcc2-86a7e7168337-8b1ff394"
          class="pricing-card-three"
        >
          <div>
            <div class="pricing-title-wrapper w-container">
              <h3>Terapia Pareja</h3>
              <ul role="list" class="list w-list-unstyled">
                <li class="list-item-2">Online: 80€</li>
              </ul>
            </div>
            <p class="pricing-card-text">
              Sesión de terapia de pareja o grupo de no-monogamia. Tienen una
              duración aproximada de 90 minutos.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="pricing-description w-container">
      <ContentRenderer :value="pricingSection || {}" />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ isPage?: boolean }>();

const { data: pricingSection } = useAsyncData('pricingSection', () =>
  queryContent('sections', 'tarifas').findOne()
);
const { data: pricingPage } = useAsyncData('pricingPage', () =>
  queryContent('/tarifas').findOne()
);
</script>
