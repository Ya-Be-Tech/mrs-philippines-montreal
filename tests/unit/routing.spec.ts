import { describe, it, expect } from 'vitest'
import { existsSync } from 'fs'
import { resolve } from 'path'

describe('Page Routes', () => {
  const root = resolve(__dirname, '../../pages')

  it('has index page', () => {
    expect(existsSync(resolve(root, 'index.vue'))).toBe(true)
  })
  it('has about page', () => {
    expect(existsSync(resolve(root, 'about.vue'))).toBe(true)
  })
  it('has talent page', () => {
    expect(existsSync(resolve(root, 'talent.vue'))).toBe(true)
  })
  it('has events/2019 page', () => {
    expect(existsSync(resolve(root, 'events/2019.vue'))).toBe(true)
  })
  it('has events/2022 page', () => {
    expect(existsSync(resolve(root, 'events/2022.vue'))).toBe(true)
  })
  it('has events index page', () => {
    expect(existsSync(resolve(root, 'events/index.vue'))).toBe(true)
  })
  it('has events/2026 page', () => {
    expect(existsSync(resolve(root, 'events/2026.vue'))).toBe(true)
  })
})
