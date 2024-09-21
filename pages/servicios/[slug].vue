<template>
  <div>
    <div class="service-section">
      <div class="service-wrapper">
        <h1 class="heading-2">{{ post?.title }}</h1>
        <div class="div-block">
          <div
            id="w-node-fb068789-0a1c-6dbe-62f8-c6183cbaef0f-44790fa8"
            class="div-block-2"
          >
            <ServicesTheForm button-variant="green" />
          </div>
          <div
            id="w-node-fb068789-0a1c-6dbe-62f8-c6183cbaef23-44790fa8"
            class="rich-text-block-2 w-richtext"
          >
            <div v-if="post">
              <ContentRenderer :value="post || {}" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <SectionsAppointment />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData('service', () =>
  queryContent('servicios')
    .where({ _path: { $match: route.path } })
    .findOne()
);
</script>
