<template>
  <section class="section-2">
    <div class="container-7">
      <div class="hero-wrapper flex-reverse">
        <h1 class="heading-12">{{ title }}</h1>
        <div class="hero-split">
          <slot name="image" />
        </div>
      </div>
    </div>
  </section>
  <section class="section-3">
    <div class="container-9">
      <div class="hero-wrapper-4">
        <div class="hero-split-3">
          <slot />
        </div>
        <div class="contact-form-wrapper w-form">
          <form
            id="wf-form-Formulario-de-contacto-ansiedad"
            name="wf-form-Formulario-de-contacto-ansiedad"
            data-name="Formulario de contacto ansiedad"
            method="get"
            class="contact-form"
            data-wf-page-id="6352a5b547309ce284790faa"
            data-wf-element-id="ae617ed8-8064-9d8c-2363-ceb314e43b3d"
          >
            <div
              id="w-node-_7c454bcd-cedd-d4b4-ce1c-22feec0fb13b-84790faa"
              class="form-title-text"
            >
              ¡Contacta conmigo!
            </div>
            <input
              class="form-text-field w-node-ae617ed8-8064-9d8c-2363-ceb314e43b40-84790faa w-input"
              maxlength="256"
              name="Nombre-ansiedad"
              data-name="Nombre (ansiedad)"
              placeholder="Tu nombre"
              type="text"
              id="Nombre-ansiedad"
              required
            /><input
              class="form-text-field w-node-ae617ed8-8064-9d8c-2363-ceb314e43b41-84790faa w-input"
              maxlength="256"
              name="Email-ansiedad"
              data-name="Email (ansiedad)"
              placeholder="Tu email"
              type="email"
              id="Email-ansiedad"
              required
            /><input
              class="form-text-field w-node-ae617ed8-8064-9d8c-2363-ceb314e43b42-84790faa w-input"
              maxlength="256"
              name="Telefono-ansiedad"
              data-name="Telefono (ansiedad)"
              placeholder="Tu teléfono"
              type="tel"
              id="Telefono-ansiedad"
              required
            /><textarea
              id="Mensaje-ansiedad"
              name="Mensaje-ansiedad"
              maxlength="5000"
              data-name="Mensaje (ansiedad)"
              placeholder="Tu mensaje..."
              required
              class="form-text-area w-node-ae617ed8-8064-9d8c-2363-ceb314e43b43-84790faa w-input"
            ></textarea
            ><label
              id="w-node-ae617ed8-8064-9d8c-2363-ceb314e43b44-84790faa"
              class="w-checkbox"
              ><input
                id="Checkbox-Ansiedad"
                type="checkbox"
                name="Checkbox-Ansiedad"
                data-name="Checkbox Ansiedad"
                required
                class="w-checkbox-input"
              /><span
                class="checkbox-label w-form-label"
                for="Checkbox-Ansiedad"
                >He leído y acepto la
                <nuxt-link to="/politica-de-privacidad"
                  ><strong>política de privacidad</strong></nuxt-link
                ></span
              ></label
            ><input
              data-wait="Enviando..."
              type="submit"
              id="w-node-ae617ed8-8064-9d8c-2363-ceb314e43b48-84790faa"
              class="button-color-3 w-button"
              value="Enviar"
            />
          </form>
          <div class="success-message w-form-done">
            <div>
              ¡Gracias! Tu mensaje se ha enviado correctamente. <br />Te
              contactaré lo antes posible
            </div>
          </div>
          <div class="error-message w-form-fail">
            <div>
              Uups! Algo ha fallado enviando el formulario, por favor vuelve a
              rellenarlo
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();

defineSlots<{
  default: () => unknown;
  image: () => unknown;
}>();
</script>
