<template>
  <div class="hero-section">
    <div class="hero-block">
      <div class="w-layout-grid hero-grid">
        <div
          id="w-node-_6d39cf5a-51e3-1ee3-7505-56ce3d6006be-6c790f92"
          class="hero-column-1"
        >
          <div class="hero-title-block">
            <div class="hero-title-wrapper">
              <h1 class="hero-title-text">
                {{ content.title1 }}&nbsp;<span class="colored-text">{{
                  content.title2
                }}</span>
                <br />{{ content.title3 }}
              </h1>
            </div>
            <nuxt-link to="/contacto" class="button-color-3 w-button">{{
              content.cta
            }}</nuxt-link>
          </div>
          <div class="hero-footer">
            <div class="hero-contact-details-grid">
              <nuxt-link :to="`tel:${globalConfig.tel}`" class="link-2">{{
                globalConfig.tel
              }}</nuxt-link
              ><nuxt-link
                :to="`mailto:${globalConfig.mail}?subject=Mail%20de%20la%20web!`"
                class="link"
                >{{ globalConfig.mail }}</nuxt-link
              >
            </div>
          </div>
        </div>
        <div
          id="w-node-_6d39cf5a-51e3-1ee3-7505-56ce3d6006cb-6c790f92"
          class="hero-column-2"
        >
          <div class="promo-image-wrapper"></div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="section-title-wrapper">
      <div class="section-grey-line"></div>
      <div class="section-colored-line-1"></div>
      <h2 class="section-title-text">Servicios</h2>
      <div class="section-colored-line-1"></div>
      <div class="section-grey-line"></div>
    </div>
    <div class="container-10 w-container">
      <section class="hero-heading-right">
        <div class="container-7">
          <div class="hero-wrapper">
            <div class="hero-split">
              <img
                src="~/assets/img/635107093188a332f9a356f9_Ansiedad.png"
                loading="lazy"
                sizes="(max-width: 479px) 85vw, (max-width: 767px) 94vw, (max-width: 991px) 687.9921875px, 413.9921875px"
                srcset="
                  ~/assets/img/635107093188a332f9a356f9_Ansiedad-p-500.png   500w,
                  ~/assets/img/635107093188a332f9a356f9_Ansiedad-p-800.png   800w,
                  ~/assets/img/635107093188a332f9a356f9_Ansiedad-p-1080.png 1080w,
                  ~/assets/img/635107093188a332f9a356f9_Ansiedad.png        1222w
                "
                alt=""
                class="shadow-two"
              />
            </div>
            <div class="hero-split">
              <h3 class="heading-9">Ansiedad y estrés</h3>
              <p class="margin-bottom-24px">
                Esa sensación de tener demasiadas cosas en la cabeza, ataques de
                ansiedad, Trastorno obsesivo compulsivo (TOC), Agorafobia...<br />Aunque
                es una emoción normal, la ansiedad puede llegar a ser muy
                angustiante. Si estás cansad@ de vivir con ansiedad contacta
                conmigo.
              </p>
              <nuxt-link to="/estres-y-ansiedad" class="button-color-3 w-button"
                >Saber más</nuxt-link
              >
            </div>
          </div>
        </div>
      </section>
      <section class="hero-heading-left">
        <div class="container-7">
          <div class="hero-wrapper flex-reverse">
            <div class="hero-split">
              <h3>Depresión</h3>
              <p class="margin-bottom-24px">
                Esa sensación de estar cargando con una pesada mochila que
                parece invisible a los ojos de la gente. Y, por si fuera poco,
                un gran sentimiento de culpa que lo dificulta todo aún más.<br />Encuentra
                el espacio donde <strong>sentirte comprendidx </strong>y
                construir el camino para volver a
                <strong>sentirte bien</strong> en tu día a día.
              </p>
              <nuxt-link
                to="/servicios/depresion"
                class="button-color-1 w-button"
                >Saber más</nuxt-link
              >
            </div>
            <div class="hero-split">
              <img
                src="~/assets/img/635105df57330c6d74f7582a_Instagram_post_-_3_(1).png"
                loading="lazy"
                srcset="
                  ~/assets/img/635105df57330c6d74f7582a_Instagram_post_-_3_(1)-p-500.png  500w,
                  ~/assets/img/635105df57330c6d74f7582a_Instagram_post_-_3_(1)-p-800.png  800w,
                  ~/assets/img/635105df57330c6d74f7582a_Instagram_post_-_3_(1).png       1059w
                "
                alt=""
                sizes="(max-width: 479px) 85vw, (max-width: 767px) 94vw, (max-width: 991px) 687.9921875px, 413.9921875px"
                class="shadow-two"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="hero-heading-right-2">
        <div class="container-8">
          <div class="hero-wrapper-2">
            <div class="hero-split-2">
              <img
                src="~/assets/img/635114b44d64e6ea1f689f80_Psiconutrición.png"
                loading="lazy"
                sizes="(max-width: 479px) 85vw, (max-width: 767px) 94vw, (max-width: 991px) 687.9921875px, 413.9921875px"
                srcset="
                  ~/assets/img/635114b44d64e6ea1f689f80_Psiconutrición-p-500.png 500w,
                  ~/assets/img/635114b44d64e6ea1f689f80_Psiconutrición-p-800.png 800w,
                  ~/assets/img/635114b44d64e6ea1f689f80_Psiconutrición.png       977w
                "
                alt=""
                class="shadow-two-2"
              />
            </div>
            <div class="hero-split-2">
              <h3>Psiconutrición</h3>
              <p class="margin-bottom-24px-2">
                ¿Sientes que estás en guerra con tu alimentación? A través de la
                Psiconutrición podemos trabajar de una manera
                <strong>positiva </strong>nuestra relación con la comida y con
                <strong>nosotras </strong>mismas.
              </p>
              <nuxt-link
                to="/servicios/psiconutricion"
                class="button-color-2 w-button"
                >Saber más</nuxt-link
              >
            </div>
          </div>
        </div>
      </section>
      <section class="hero-heading-left-2">
        <div class="container-8">
          <div class="hero-wrapper-3 flex-reverse">
            <div class="hero-split-2">
              <h3>Apegos y dependencia emocional</h3>
              <p class="margin-bottom-24px-2">
                ¿Sientes que tienes &quot;mala suerte en el amor&quot;?
                ¿relación tras relación se repite el mismo patrón y acabas
                sufriendo por amor? ¿Sientes que tu vida gira en torno a tu
                pareja y que sin ella casi nada tiene sentido?
                <br />Trabajemos juntxs para conseguir un
                <strong>apego seguro</strong> y construir tu camino para
                encontrar un <strong>amor sano</strong>.
              </p>
              <nuxt-link
                to="/servicios/dependencia-emocional"
                class="button-color-3 w-button"
                >Saber más</nuxt-link
              >
            </div>
            <div class="hero-split-2">
              <img
                src="~/assets/img/63512398b6cfd14f9ff3600b_Dependencia_emocional_(1).png"
                loading="lazy"
                sizes="(max-width: 479px) 85vw, (max-width: 767px) 94vw, (max-width: 991px) 687.9921875px, 413.9921875px"
                srcset="
                  ~/assets/img/63512398b6cfd14f9ff3600b_Dependencia_emocional_(1)-p-500.png 500w,
                  ~/assets/img/63512398b6cfd14f9ff3600b_Dependencia_emocional_(1)-p-800.png 800w,
                  ~/assets/img/63512398b6cfd14f9ff3600b_Dependencia_emocional_(1).png       977w
                "
                alt=""
                class="shadow-two-3"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="hero-heading-right-3">
        <div class="container-8">
          <div class="hero-wrapper-3">
            <div class="hero-split-2">
              <img
                src="~/assets/img/63512e6b9beccee8e2717fd6_Sexología.png"
                loading="lazy"
                sizes="(max-width: 479px) 85vw, (max-width: 767px) 94vw, (max-width: 991px) 687.9921875px, 413.9921875px"
                srcset="
                  ~/assets/img/63512e6b9beccee8e2717fd6_Sexología-p-500.png 500w,
                  ~/assets/img/63512e6b9beccee8e2717fd6_Sexología-p-800.png 800w,
                  ~/assets/img/63512e6b9beccee8e2717fd6_Sexología.png       977w
                "
                alt=""
                class="shadow-two-4"
              />
            </div>
            <div class="hero-split-2">
              <h3 class="heading-10">Sexología</h3>
              <p class="margin-bottom-24px-2">
                El sexo es mucho más que tener relaciones sexuales con otra
                persona. La sexualidad debe ser una fuente de
                <strong>placer </strong>y <strong>disfrute</strong>, cuando esto
                no es así es importante trabajar para volver a disfrutar de la
                sexualidad de una manera <strong>plena</strong>.
              </p>
              <nuxt-link
                to="/servicios/sexologia-problemas-sexuales"
                class="button-color-1 w-button"
                >Saber más</nuxt-link
              >
            </div>
          </div>
        </div>
      </section>
      <section class="hero-heading-left-3">
        <div class="container-8">
          <div class="hero-wrapper-3 flex-reverse">
            <div class="hero-split-2">
              <h3>Psicología feminista</h3>
              <p class="margin-bottom-24px-2">
                Independientemente de tu sexo, género y orientación sexual, la
                perspectiva feminista en terapia puede ayudarte a tener una
                mayor <strong>comprensión </strong>de tu malestar y darte más
                <strong>herramientas </strong>para romper con él.
              </p>
              <nuxt-link
                to="/servicios/psicologa-feminista"
                class="button-color-2 w-button"
                >Saber más</nuxt-link
              >
            </div>
            <div class="hero-split-2">
              <img
                src="~/assets/img/635137ac13c869a8126ce801_Instagram_post_-_3_(2).png"
                loading="lazy"
                sizes="100vw"
                srcset="
                  ~/assets/img/635137ac13c869a8126ce801_Instagram_post_-_3_(2)-p-500.png   500w,
                  ~/assets/img/635137ac13c869a8126ce801_Instagram_post_-_3_(2)-p-800.png   800w,
                  ~/assets/img/635137ac13c869a8126ce801_Instagram_post_-_3_(2)-p-1080.png 1080w,
                  ~/assets/img/635137ac13c869a8126ce801_Instagram_post_-_3_(2).png        1080w
                "
                alt=""
                class="shadow-two-5"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="hero-heading-right-4">
        <div class="container-8">
          <div class="hero-wrapper-3">
            <div class="hero-split-2">
              <img
                src="~/assets/img/63513bacaba700a82a19d823_Poliamor.png"
                loading="lazy"
                sizes="100vw"
                srcset="
                  ~/assets/img/63513bacaba700a82a19d823_Poliamor-p-500.png 500w,
                  ~/assets/img/63513bacaba700a82a19d823_Poliamor-p-800.png 800w,
                  ~/assets/img/63513bacaba700a82a19d823_Poliamor.png       988w
                "
                alt=""
                class="shadow-two-6"
              />
            </div>
            <div class="hero-split-2">
              <h3>Poliamor y no monogamias</h3>
              <p class="margin-bottom-24px-2">
                ¿Tú pareja te ha propuesto abrir la relación y no sabes si es
                algo para ti? ¿Sientes que necesitas ayuda para gestionar una
                relación poliamorosa? ¿Necesitas un espacio donde poder hablar
                tus inquietudes, miedos y celos?
              </p>
              <nuxt-link
                to="/servicios/poliamor-y-no-monogamia"
                class="button-color-3 w-button"
                >Saber más</nuxt-link
              >
            </div>
          </div>
        </div>
      </section>
      <section class="hero-heading-left-3">
        <div class="container-8">
          <div class="hero-wrapper-3 flex-reverse">
            <div class="hero-split-2">
              <h3>Otros</h3>
              <p class="margin-bottom-24px-2">
                Si sientes malestar o que estás pasando por un mal momento
                podemos trabajar juntxs para identificar tus
                <strong>necesidades </strong>y buscar la manera de conseguir una
                mayor <strong>satisfacción </strong>personal, social y laboral
                en tu vida.
              </p>
              <nuxt-link to="/servicios/otros" class="button-color-1 w-button"
                >Saber más</nuxt-link
              >
            </div>
            <div class="hero-split-2">
              <img
                src="~/assets/img/6351469daba70048331a7e46_Otros.png"
                loading="lazy"
                sizes="100vw"
                srcset="
                  ~/assets/img/6351469daba70048331a7e46_Otros-p-500.png   500w,
                  ~/assets/img/6351469daba70048331a7e46_Otros-p-800.png   800w,
                  ~/assets/img/6351469daba70048331a7e46_Otros-p-1080.png 1080w,
                  ~/assets/img/6351469daba70048331a7e46_Otros.png        1080w
                "
                alt=""
                class="shadow-two-5"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <SectionsAppointment />
  <SectionsPricing />
</template>

<script setup lang="ts">
const { seo, globalConfig } = useAppConfig();

useHead({
  titleTemplate: seo.siteName,
});

const { data: content } = await useAsyncData('home', () =>
  queryContent('/').findOne()
);
</script>
