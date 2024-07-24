import { field, group } from '@nuxthq/studio/theme';

export default defineAppConfig({
  globalConfig: group({
    title: 'Config',
    description: 'Datos globales',
    icon: 'i-ph-wrench',
    fields: {
      primary: field({
        type: 'string',
        title: 'Teléfono',
        description: 'Teléfono de contacto',
        icon: 'i-ph-phone',
        default: '634 58 67 24',
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
});
