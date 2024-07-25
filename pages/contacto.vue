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
        <form
          id="email-form"
          name="email-form"
          data-name="Email Form"
          method="get"
          class="contact-form"
          data-wf-page-id="6352a5b547309c0182790fa4"
          data-wf-element-id="2afda74d-78cb-04bc-e6b1-b15c2611377c"
        >
          <h3
            id="w-node-_2afda74d-78cb-04bc-e6b1-b15c2611377d-82790fa4"
            class="form-title-text"
          >
            Contáctame
          </h3>
          <input
            class="form-text-field w-node-_2afda74d-78cb-04bc-e6b1-b15c2611377f-82790fa4 w-input"
            maxlength="256"
            name="name-2"
            data-name="Name 2"
            placeholder="Nombre"
            type="text"
            id="name-2"
            required
          /><input
            class="form-text-field w-node-_2afda74d-78cb-04bc-e6b1-b15c26113780-82790fa4 w-input"
            maxlength="256"
            name="email-2"
            data-name="Email 2"
            placeholder="Email"
            type="email"
            id="email-2"
            required
          /><textarea
            placeholder="Tu mensaje..."
            maxlength="5000"
            id="Message"
            name="Message"
            data-name="Message"
            required
            class="form-text-area w-node-c7589bef-bf8c-db5f-51a1-0fb5ad4e6107-82790fa4 w-input"
          ></textarea
          ><input
            type="submit"
            data-wait="Enviando..."
            id="w-node-_2afda74d-78cb-04bc-e6b1-b15c26113784-82790fa4"
            class="button-color-2 w-button"
            value="Enviar"
          />
        </form>
        <div class="success-message w-form-done">
          <div>
            Gracias! Tu mensaje se ha enviado correctamente. Te contestaré lo
            antes posible.
          </div>
        </div>
        <div class="error-message w-form-fail">
          <div>
            Uups! Algo ha ido mal enviando tu mensaje. Por favor, inténtalo de
            nuevo.
          </div>
        </div>
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
