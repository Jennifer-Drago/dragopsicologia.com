<template>
  <h2 class="heading-4">{{ title }}</h2>
  <div class="div-block-3">
    <a :href="`tel:${globalConfig.tel}`" class="link-block-3 w-inline-block"
      ><img
        src="~/assets/img/62f671f0bab2af2edf610017_icons8-whatsapp-100.png"
        loading="lazy"
        alt=""
      />
      <div>{{ globalConfig.tel }}</div></a
    ><a
      :href="`mailto:${globalConfig.mail}`"
      class="link-block-4 w-inline-block"
      ><img
        src="~/assets/img/62f67257125ae499008eae10_icons8-mail-100.png"
        loading="lazy"
        alt=""
      />
      <div>{{ globalConfig.mail }}</div></a
    >
  </div>
  <div class="container-5 w-container">
    <div class="text-block-2">
      <strong class="bold-text">{{ subtitle }}</strong>
    </div>
    <div class="contact-form-wrapper w-form">
      <form
        id="email-form"
        name="email-form"
        data-name="Email Form"
        method="get"
        class="contact-form"
        data-wf-page-id="6352a5b547309c6e44790fa8"
        data-wf-element-id="242a3bd9-5a56-38ee-6128-4e15305d358b"
      >
        <input
          class="form-text-field w-node-_242a3bd9-5a56-38ee-6128-4e15305d358e-44790fa8 w-input"
          maxlength="256"
          name="Name-Landing"
          data-name="Name Landing"
          placeholder="Nombre"
          type="text"
          id="Name-Landing"
          required
        /><input
          class="form-text-field w-node-_242a3bd9-5a56-38ee-6128-4e15305d358f-44790fa8 w-input"
          maxlength="256"
          name="Email-Landing"
          data-name="Email Landing"
          placeholder="Email"
          type="email"
          id="Email-Landing"
          required
        /><input
          class="form-text-field w-node-_242a3bd9-5a56-38ee-6128-4e15305d3590-44790fa8 w-input"
          maxlength="256"
          name="Telefono-Landing"
          data-name="Telefono Landing"
          placeholder="Teléfono"
          type="tel"
          id="Telefono-Landing"
          required
        /><label
          id="w-node-_242a3bd9-5a56-38ee-6128-4e15305d3592-44790fa8"
          class="w-checkbox"
          ><input
            type="checkbox"
            id="Checkbox-Landing"
            name="Checkbox-Landing"
            data-name="Checkbox Landing"
            required
            class="w-checkbox-input"
          /><span class="checkbox-label w-form-label" for="Checkbox-Landing"
            >He leído y acepto la política de privacidad</span
          ></label
        ><input
          type="submit"
          data-wait="Enviando..."
          id="w-node-_242a3bd9-5a56-38ee-6128-4e15305d3596-44790fa8"
          class="button-color-2 w-button"
          value="Enviar"
        />
      </form>
      <div class="success-message w-form-done">
        <div>
          ¡Gracias! Tu mensaje se ha enviado correctamente. <br />Te contactaré
          lo antes posible.
        </div>
      </div>
      <div class="error-message w-form-fail">
        <div>
          ¡Uups! Algo ha ido mal al enviar el formulario. Por favor, inténtalo
          de nuevo.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { globalConfig } = useAppConfig();

withDefaults(
  defineProps<{
    title: string;
    subtitle: string;
  }>(),
  {
    title: '¡Contacta conmigo!',
    subtitle:
      'O si lo prefieres envíame tus datos con el siguiente formulario y te contacto lo antes posible:',
  }
);
</script>
