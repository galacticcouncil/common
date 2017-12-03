// ISC, Copyright 2017 Jaco Greeff
// @flow

const assert = require('../assert');
const isHex = require('../is/hex');
const hexStripPrefix = require('./stripPrefix');

/**
  @name hexToBuffer
  @signature hexToBuffer (value?: string): Buffer
  @summary Creates a Buffer object from a hex string.
  @description
    `null` inputs returns an empty `Buffer` result. Hex input values return the actual bytes value converted to a Buffer. Anything that is not a hex string (including the `0x` prefix) throws an error.
  @example
    import { hexToBuffer } from '@polkadot/util';

    console.log('Buffer object', hexToBuffer('0x123480001f'));
*/
module.exports = function hexToBuffer (value?: string): Buffer {
  if (!value) {
    return Buffer.from([]);
  }

  assert(isHex(value), `Cannot convert non-hex value '${value}' to Buffer`);

  return Buffer.from(hexStripPrefix(value), 'hex');
};