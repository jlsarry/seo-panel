'use strict';

/**
 * print-provider router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::print-provider.print-provider');
