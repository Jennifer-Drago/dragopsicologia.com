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
      class="contact-form"
      @submit.prevent="e => submitForm(e as SubmitEvent)"
    >
      <input
        id="name"
        class="form-text-field w-node-_092ba6a6-7c27-4abc-017c-d3fd107d32c6-107d32a4 w-input"
        maxlength="256"
        name="name"
        placeholder="Nombre"
        type="text"
        required
      /><input
        id="email"
        class="form-text-field w-node-_092ba6a6-7c27-4abc-017c-d3fd107d32c7-107d32a4 w-input"
        maxlength="256"
        name="email"
        placeholder="Email"
        type="email"
        required
      /><textarea
        id="message"
        name="message"
        maxlength="5000"
        placeholder="Tu mensaje..."
        required
        class="form-text-area w-node-_092ba6a6-7c27-4abc-017c-d3fd107d32c9-107d32a4 w-input"
      /><label
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
      >
      <div :key="captchaId" class="cf-turnstile" :data-sitekey="siteKey"></div>
      <input
        id="w-node-_092ba6a6-7c27-4abc-017c-d3fd107d32ce-107d32a4"
        type="submit"
        class="w-button"
        :class="{
          'button-color-2': buttonVariant === 'yellow',
          'button-color-3': buttonVariant === 'green',
        }"
        value="Enviar"
      />
    </form>
    <div
      v-if="errorsInForm"
      class="error-message w-form-fail"
      :style="{ ...(errorsInForm && { display: 'block' }) }"
    >
      <div>
        Uups! Algo ha fallado enviando el formulario, por favor vuelve a
        rellenarlo
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

const errorsInForm = ref(false);

const siteKey = useRuntimeConfig().public.turnstileSiteKey;
const captchaId = useId();
const token = ref('');

const resetForm = (form: HTMLFormElement) => {
  form.reset();
  errorsInForm.value = false;
};

const submitForm = async (event: SubmitEvent) => {
  errorsInForm.value = false;
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  formData.append('token', token.value);

  try {
    const response = await $fetch('/api/submit', {
      method: 'POST',
      body: formData,
    });

    resetForm(form);

    if (response.ok || (response as unknown as string) === 'Email sent') {
      navigateTo('/gracias');
    } else {
      console.error('Error sending form:', response.statusText);
    }
  } catch (error) {
    console.error('HTTP Error', error);
    errorsInForm.value = true;
  }
};
</script>
