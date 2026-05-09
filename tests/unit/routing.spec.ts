import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

describe('Routing - All Pages Should Exist', () => {
  const projectRoot = path.resolve(__dirname, '../../')

  // Test that all required page files exist
  it('home page (pages/index.vue) exists', () => {
    const filePath = path.join(projectRoot, 'pages/index.vue')
    expect(fs.existsSync(filePath)).toBe(true)
  })

  it('about page (pages/about.vue) exists', () => {
    const filePath = path.join(projectRoot, 'pages/about.vue')
    expect(fs.existsSync(filePath)).toBe(true)
  })

  it('events/2019 page (pages/events/2019.vue) exists', () => {
    const filePath = path.join(projectRoot, 'pages/events/2019.vue')
    expect(fs.existsSync(filePath)).toBe(true)
  })

  it('events/2022 page (pages/events/2022.vue) exists', () => {
    const filePath = path.join(projectRoot, 'pages/events/2022.vue')
    expect(fs.existsSync(filePath)).toBe(true)
  })

  it('talent page (pages/talent.vue) exists', () => {
    const filePath = path.join(projectRoot, 'pages/talent.vue')
    expect(fs.existsSync(filePath)).toBe(true)
  })
})
