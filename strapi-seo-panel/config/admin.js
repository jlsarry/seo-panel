module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '82a40b1a3beeb110ecb89bc48263b2b8'),
  },
  watchIgnoreFiles: [
    '**/config/sync/**',
  ],
});
