<template>
  <div class="layout">
    <TheHeader />
    <main><slot /></main>
    <TheFooter />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100dvh;
}

main {
  flex: 1;
}
</style>
