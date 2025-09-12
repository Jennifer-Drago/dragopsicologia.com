<template>
  <section v-if="alignText === 'right'" class="hero-heading-right-5">
    <div class="container-9">
      <div class="hero-wrapper-4">
        <div class="hero-split-3">
          <slot name="image" />
        </div>
        <div class="hero-split-3">
          <slot />
        </div>
      </div>
    </div>
  </section>
  <section v-if="alignText === 'left'" class="hero-heading-left-4">
    <div class="container-9">
      <div class="hero-wrapper-4">
        <div class="hero-split-3">
          <slot />
        </div>
        <div class="hero-split-3">
          <slot name="image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    alignText?: 'right' | 'left';
  }>(),
  {
    alignText: 'right',
  }
);

defineSlots<{
  default: () => unknown;
  image: () => unknown;
}>();
</script>
