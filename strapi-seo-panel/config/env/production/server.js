module.exports = ({ env }) => ({
  url: env("https://strapi-seo-panel.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
