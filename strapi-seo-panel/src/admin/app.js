import AuthLogo from './extensions/authlogo.png';
import MenuLogo from './extensions/menulogo.png';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
     // Override or extend the theme
     theme: {
        colors: {
          primary200: '#7ce69a',
          primary500: '#6ded91',
          primary600: '#39b75d',
          primary700: '#22d655',
          secondary100: '#a3f7bb',
          secondary200: '#aefcc5',
          secondary500: '#65f08e',
          secondary600: '#07ab36',
          secondary700: '#02962c',
        },
      },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {},
};
