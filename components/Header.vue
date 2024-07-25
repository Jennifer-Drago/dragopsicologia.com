<template>
  <div
    data-collapse="medium"
    data-animation="default"
    data-duration="400"
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    class="navbar shadow-nav w-nav"
  >
    <div class="navbar-wrapper">
      <nuxt-link to="/" class="navbar-brand w-nav-brand" @click="isOpen = false"
        ><img
          src="~/assets/img/62aa145b82827a6d64c6b7e6_marca_basica_horizontal.svg"
          height="60"
          alt=""
          class="navbar-brand-logo"
      /></nuxt-link>
      <div class="nav-menu-wrapper">
        <nav role="navigation" class="nav-menu w-nav-menu">
          <nuxt-link to="/" class="nav-link w-nav-link">Inicio</nuxt-link
          ><nuxt-link to="/servicios" class="nav-link w-nav-link"
            >Servicios</nuxt-link
          ><nuxt-link to="/sobremi" class="nav-link w-nav-link"
            >Sobre mí</nuxt-link
          ><nuxt-link to="/tarifas" class="nav-link w-nav-link"
            >Tarifas</nuxt-link
          ><nuxt-link to="/contacto" class="nav-link w-nav-link"
            >Contacto</nuxt-link
          >
        </nav>
        <button
          class="hamburger-menu-button round w-nav-button"
          aria-label="Abrir/Cerrar Menu"
          aria-haspopup="menu"
          :aria-expanded="isOpen"
          aria-controls="w-nav-overlay-0"
          @click="isOpen = !isOpen"
          :class="{
            'w--open': isOpen,
          }"
        >
          <img
            src="~/assets/img/62a994635e8c787272048f9c_hamburger-menu-icon.svg"
            height="20"
            width="20"
            alt=""
            class="button-icon-image"
          />
        </button>
        <Transition :duration="400">
          <div
            v-if="isOpen"
            class="w-nav-overlay"
            id="w-nav-overlay-0"
            :style="overlayStyles"
          >
            <nav
              role="navigation"
              class="nav-menu w-nav-menu"
              :data-nav-menu-open="isOpen"
              style="transition: transform 0.4s ease"
            >
              <nuxt-link
                v-for="page in pages"
                :to="page.link"
                v-bind="{
                  ...(isCurrent(page.link) && { ariaCurrent: 'page' }),
                }"
                class="nav-link w-nav-link w--nav-link-open"
                :class="{
                  'w--current': isCurrent(page.link),
                }"
                @click="isOpen = false"
                >{{ page.title }}</nuxt-link
              >
            </nav>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// isOpen menu state
const isOpen = ref(false);
// necessary inline styles because of global css
const overlayStyles = computed(() => ({
  display: isOpen.value ? 'block' : 'none',
  height: isOpen.value ? '100vh' : 0,
}));

// is Current
const router = useRouter();
const currentMatchedRoute = computed(() => router.currentRoute.value.matched);
const isCurrent = (routePath: string) =>
  currentMatchedRoute.value.some(
    (currentRoute) => currentRoute.path === routePath
  );

// Static data
const pages = useAppConfig().links.header || [];
</script>

<style lang="css" scoped>
.v-enter-from nav,
.v-leave-to nav {
  transform: translateY(-100%);
}
</style>
