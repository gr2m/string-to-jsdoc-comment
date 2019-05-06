const assert = require('assert')
const { stringToJsdocComment } = require('.')

assert.strictEqual(
  stringToJsdocComment('Here is some description.'),
  `/**
 * Here is some description.
 */`
)

assert.strictEqual(
  stringToJsdocComment(`Here is some multi
line
description.`),
  `/**
 * Here is some multi
 * line
 * description.
 */`
)
