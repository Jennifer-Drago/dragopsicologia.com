import { field, group } from '@nuxthq/studio/theme';
import appConfig from './app.config';

export default defineNuxtSchema({
  appConfig: {
    links: group({
      title: 'Configuración de enlaces',
      icon: 'i-ph-list-bullets',
      fields: {
        header: field({
          type: 'array',
          title: 'Links Menú Header',
          descripción:
            'Links del menú hamburguesa (en móvil) y la cabecera (en escritorio)',
          icon: 'i-ph-rows-plus-top-bold',
          default: [],
        }),
        footer: field({
          type: 'array',
          title: 'Links Footer',
          descripción: 'Links del footer',
          icon: 'i-ph-rows-plus-bottom-bold',
          default: [],
        }),
      },
    }),
    globalConfig: group({
      title: 'Config',
      description: 'Datos globales',
      icon: 'i-ph-wrench',
      fields: {
        tel: field({
          type: 'string',
          title: 'Teléfono',
          description: 'Teléfono de contacto',
          icon: 'i-ph-phone',
          default: '',
        }),
        mail: field({
          type: 'string',
          title: 'Email',
          description: 'Dirección email',
          icon: 'i-ph-envelope',
          default: '',
        }),
        address: field({
          type: 'string',
          title: 'Dirección',
          description: 'Dirección física',
          icon: 'i-ph-map-pin',
          default: '',
        }),
        siteUrl: field({
          type: 'string',
          title: 'URL del sitio',
          description: 'Se para SEO y para el aviso legal',
          icon: 'i-mdi-laptop',
          default: 'https://www.dragopsicologia.com/',
        }),
        cif: field({
          type: 'string',
          title: 'CIF',
          description: '',
          icon: 'i-ph-number-circle-eight-fill',
          default: '46968604M',
        }),
        name: field({
          type: 'string',
          title: 'Name',
          description: '',
          icon: 'i-ph-user',
          default: 'Jennifer Drago Gómez',
        }),
      },
    }),
    seo: group({
      title: 'SEO',
      description: 'Configuración SEO',
      icon: 'i-ph-app-window',
      fields: {
        siteName: field({
          type: 'string',
          title: 'Nombre del sitio',
          description:
            'Se usa en la segunda parte del título, por ejemplo "Mi sitio - Nombre del sitio"',
          icon: 'i-mdi-web',
          default: 'Drago Psicología',
        }),
      },
    }),
  },
});
