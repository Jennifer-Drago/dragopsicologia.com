<template>
  <div class="div-block-5">
    <div class="section-title-wrapper">
      <div class="section-grey-line"></div>
      <div class="section-colored-line-1"></div>
      <h2 class="section-title-text">{{ content?.title }}</h2>
      <div class="section-colored-line-1"></div>
      <div class="section-grey-line"></div>
    </div>
    <div class="w-container">
      <section class="hero-heading-right">
        <div class="container-7">
          <div class="hero-wrapper">
            <div class="hero-split">
              <img
                src="/img/635107093188a332f9a356f9_Ansiedad.png"
                loading="lazy"
                sizes="(max-width: 767px) 94vw, (max-width: 991px) 687.9921875px, 413.9921875px"
                srcset="
                  /img/635107093188a332f9a356f9_Ansiedad-p-500.png   500w,
                  /img/635107093188a332f9a356f9_Ansiedad-p-800.png   800w,
                  /img/635107093188a332f9a356f9_Ansiedad-p-1080.png 1080w,
                  /img/635107093188a332f9a356f9_Ansiedad.png        1222w
                "
                alt=""
                class="shadow-two"
              />
            </div>
            <div class="hero-split">
              <sections-services-item
                :content="servicesExcerpts?.['Estres Y Ansiedad']"
                link="/servicios/estres-y-ansiedad"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="hero-heading-left">
        <div class="container-7">
          <div class="hero-wrapper flex-reverse">
            <div class="hero-split">
              <sections-services-item
                :content="servicesExcerpts?.['Depresion']"
                link="/servicios/depresion"
              />
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
                sizes="(max-width: 767px) 94vw, (max-width: 991px) 687.9921875px, 413.9921875px"
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
                sizes="(max-width: 767px) 94vw, (max-width: 991px) 687.9921875px, 413.9921875px"
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
              <sections-services-item
                :content="servicesExcerpts?.['Psiconutricion']"
                link="/servicios/psiconutricion"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="hero-heading-left-2">
        <div class="container-8">
          <div class="hero-wrapper-3 flex-reverse">
            <div class="hero-split-2">
              <sections-services-item
                :content="servicesExcerpts?.['Dependencia Emocional']"
                link="/servicios/dependencia-emocional"
              />
            </div>
            <div class="hero-split-2">
              <img
                src="~/assets/img/63512398b6cfd14f9ff3600b_Dependencia_emocional_(1).png"
                loading="lazy"
                sizes="(max-width: 767px) 94vw, (max-width: 991px) 687.9921875px, 413.9921875px"
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
                sizes="(max-width: 767px) 94vw, (max-width: 991px) 687.9921875px, 413.9921875px"
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
              <sections-services-item
                :content="servicesExcerpts?.['Sexologia Problemas Sexuales']"
                link="/servicios/sexologia-problemas-sexuales"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="hero-heading-left-3">
        <div class="container-8">
          <div class="hero-wrapper-3 flex-reverse">
            <div class="hero-split-2">
              <sections-services-item
                :content="servicesExcerpts?.['Psicologa Feminista']"
                link="/servicios/psicologa-feminista"
              />
            </div>
            <div class="hero-split-2">
              <img
                src="~/assets/img/635137ac13c869a8126ce801_Instagram_post_-_3_(2).png"
                loading="lazy"
                sizes="(max-width: 767px) 94vw, (max-width: 991px) 688px, 414px"
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
                sizes="(max-width: 767px) 94vw, (max-width: 991px) 687.9921875px, 413.9921875px"
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
              <sections-services-item
                :content="servicesExcerpts?.['Poliamor Y No Monogamia']"
                link="/servicios/poliamor-y-no-monogamia"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="hero-heading-left-3">
        <div class="container-8">
          <div class="hero-wrapper-3 flex-reverse">
            <div class="hero-split-2">
              <sections-services-item
                :content="servicesExcerpts?.Otros"
                link="/servicios/otros"
              />
            </div>
            <div class="hero-split-2">
              <img
                src="~/assets/img/6351469daba70048331a7e46_Otros.png"
                loading="lazy"
                sizes="(max-width: 767px) 94vw, (max-width: 991px) 688px, 414px"
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
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';

const { data: content } = await useAsyncData('servicePage', () =>
  queryContent('/servicios').findOne()
);

const { data: servicesPartials } = await useAsyncData('servicesPartials', () =>
  queryContent('servicios').where({ _partial: true }).find()
);

const servicesExcerpts = (servicesPartials.value || []).reduce(
  (acc, curr, index) => ({
    ...acc,
    ...{
      [curr.title || index]: curr,
    },
  }),
  {} as { [k: string]: ParsedContent }
);
</script>
