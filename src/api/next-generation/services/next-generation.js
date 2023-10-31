'use strict';

/**
 * next-generation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::next-generation.next-generation');
