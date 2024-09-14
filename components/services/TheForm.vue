<template>
  <h2
    class="heading-4"
    :class="{
      'form-title-text': centredTitle,
    }"
  >
    {{ title }}
  </h2>
  <div class="contact-form-wrapper w-form">
    <form
      name="contact-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      id="wf-form-Formulario-de-contacto"
      method="get"
      class="contact-form"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <input type="hidden" name="bot-field" />
      <input
        class="form-text-field w-node-_092ba6a6-7c27-4abc-017c-d3fd107d32c6-107d32a4 w-input"
        maxlength="256"
        name="name"
        placeholder="Nombre"
        type="text"
        id="name"
        required
      /><input
        class="form-text-field w-node-_092ba6a6-7c27-4abc-017c-d3fd107d32c7-107d32a4 w-input"
        maxlength="256"
        name="email"
        placeholder="Email"
        type="email"
        id="email"
        required
      /><textarea
        id="Message"
        name="Message"
        maxlength="5000"
        placeholder="Tu mensaje..."
        required
        class="form-text-area w-node-_092ba6a6-7c27-4abc-017c-d3fd107d32c9-107d32a4 w-input"
      ></textarea
      ><label
        id="w-node-_092ba6a6-7c27-4abc-017c-d3fd107d32ca-107d32a4"
        class="w-checkbox"
        ><input
          id="checkbox"
          type="checkbox"
          name="checkbox"
          required
          class="w-checkbox-input"
        /><span class="checkbox-label w-form-label" for="checkbox"
          >He leído y acepto la política de privacidad</span
        ></label
      ><input
        type="submit"
        id="w-node-_092ba6a6-7c27-4abc-017c-d3fd107d32ce-107d32a4"
        class="w-button"
        :class="{
          'button-color-2': buttonVariant === 'yellow',
          'button-color-3': buttonVariant === 'green',
        }"
        value="Enviar"
      />
    </form>
    <div class="success-message w-form-done">
      <div>
        ¡Gracias! Tu mensaje se ha enviado correctamente. <br />Te contactaré lo
        antes posible
      </div>
    </div>
    <div class="error-message w-form-fail">
      <div>
        Uups! Algo ha fallado enviando el formulario, por favor vuelve a
        rellenarlo
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { globalConfig } = useAppConfig();

withDefaults(
  defineProps<{
    title?: string;
    centredTitle?: boolean;
    buttonVariant?: 'yellow' | 'green';
  }>(),
  {
    title: '¡Contacta conmigo!',
    centredTitle: true,
    buttonVariant: 'yellow',
  }
);
</script>
