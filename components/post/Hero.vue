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
          <ServicesTheForm />
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
