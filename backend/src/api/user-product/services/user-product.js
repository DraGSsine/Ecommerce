'use strict';

/**
 * user-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-product.user-product');
