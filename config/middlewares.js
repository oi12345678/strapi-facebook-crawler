module.exports = [
  'strapi::errors',
  'strapi::security',
  "strapi::cors",
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     enabled: true,
  //     header: '*',
  //     methods:['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
  //     origin: ['https://facebook.com',"http://localhost:3000/"]
  //   }
  // },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
