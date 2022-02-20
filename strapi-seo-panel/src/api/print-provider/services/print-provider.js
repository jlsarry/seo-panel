'use strict';

/**
 * print-provider service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::print-provider.print-provider');
