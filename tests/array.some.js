/*globals beforeEach, describe, it, module, inject, expect */

describe('Polyfill : array.some', function () {
    'use strict';

    it('should be defined', function () {
        expect(Array.prototype.some).toBeDefined();
    });
});