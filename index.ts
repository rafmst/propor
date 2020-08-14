#!/usr/bin/env ts-node
import yargs from 'yargs'
import { Interface } from 'readline'
const log = console.log

interface Arguments {
  _: Array<string>
  h?: number
  height?: number
  w?: number
  width?: number
}

// Catch the arguments
const args: Arguments = yargs.options({}).argv
const values = args._

/**
 * Calculate greatest common divisor
 * @param x number
 * @param y number
 */
const gcd = (x: number, y: number): number => {
  x = Math.abs(x)
  y = Math.abs(y)
  while (y) {
    const t = y
    y = x % y
    x = t
  }

  return x
}

if (values.length === 2) {
  const w: number = parseInt(values[0])
  const h: number = parseInt(values[1])

  if (typeof args.h !== 'undefined' || typeof args.height !== 'undefined') {
    const newHeight = typeof args.h !== 'undefined' ? args.h : args.height
    if (typeof newHeight !== 'undefined') {
      log(`The proportional height is: ${(newHeight * w) / h}`)
    }
  } else if (typeof args.w !== 'undefined' || typeof args.width !== 'undefined') {
    const newWidth = typeof args.w !== 'undefined' ? args.w : args.width
    if (typeof newWidth !== 'undefined') {
      log(`The proportional height is: ${(newWidth * h) / w}`)
    }
  } else {
    const divisor = gcd(w, h)
    log(`The ratio is: ${w / divisor}:${h / divisor}`)
    log(`The percentage is: ${(h / w) * 100}%`)
  }
} else {
  log('Add at least two values, example: propor 1600 900')
}
