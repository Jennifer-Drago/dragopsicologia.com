import { field, group } from '@nuxthq/studio/theme';

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
          title: 'Teléfono/Whatsapp',
          description: 'Teléfono de contacto (Whatsapp)',
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
    email: group({
      title: 'Configuración de email',
      icon: 'i-mdi-email',
      fields: {
        sender: group({
          title: 'Sender (Remitente)',
          fields: {
            email: field({
              type: 'string',
              title: 'Email',
              description: 'Email del remitente',
              icon: 'i-mdi-email',
              default: 'contacto@dragopsicologia.com',
            }),
            name: field({
              type: 'string',
              title: 'Nombre',
              description: 'Nombre del remitente',
              icon: 'i-mdi-account',
              default: '[Contacto Web] Dragopsicología.com',
            }),
          },
        }),
        subjectTemplate: field({
          type: 'string',
          title: 'Plantilla de asunto',
          description:
            'Plantilla para el asunto del email. Puedes usar la variable `{{name}}`',
          icon: 'i-mdi-email',
          default: '[Contacto Web] Nuevo mensaje de {{name}}',
        }),
      },
    }),
  },
});
