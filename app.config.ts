export default defineAppConfig({
  seo: {
    siteName: 'Drago Psicología',
  },
  globalConfig: {
    tel: '634 58 67 24',
    mail: 'dragopsicologia@gmail.com',
    address: 'Calle Narcís Monturiol 25, Cubelles (Barcelona)',
    siteUrl: 'https://www.dragopsicologia.com/',
    cif: '46968604M',
    name: 'Jennifer Drago Gómez',
  },
  links: {
    header: [
      {
        link: '/',
        title: 'Inicio',
      },
      {
        link: '/servicios',
        title: 'Servicios',
      },
      {
        link: '/sobremi',
        title: 'Sobre mí',
      },
      {
        link: '/tarifas',
        title: 'Tarifas',
      },
      {
        link: '/contacto',
        title: 'Contacto',
      },
    ],
    footer: [
      { link: '/aviso-legal', title: 'Aviso legal' },
      { link: '/politica-de-privacidad', title: 'Política de privacidad' },
    ],
  },
});
