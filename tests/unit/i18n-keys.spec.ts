import { describe, it, expect } from 'vitest'
import en from '../../locales/en.json'
import fr from '../../locales/fr.json'
import tl from '../../locales/tl.json'

describe('i18n Locales - Key Parity and Emoji Validation', () => {
  // Test that English and French have the same keys
  it('French locale has same keys as English locale', () => {
    const enKeys = Object.keys(en).sort()
    const frKeys = Object.keys(fr).sort()
    expect(frKeys).toEqual(enKeys)
  })

  // Test that English and Tagalog have the same keys
  it('Tagalog locale has same keys as English locale', () => {
    const enKeys = Object.keys(en).sort()
    const tlKeys = Object.keys(tl).sort()
    expect(tlKeys).toEqual(enKeys)
  })

  // Test that all three locales have identical key sets
  it('all three locales have identical key sets', () => {
    const enKeys = Object.keys(en).sort()
    const frKeys = Object.keys(fr).sort()
    const tlKeys = Object.keys(tl).sort()

    expect(frKeys).toEqual(enKeys)
    expect(tlKeys).toEqual(enKeys)
  })

  // Test that no English locale value contains emoji
  it('English locale has no emoji characters', () => {
    const emojiRegex = /\p{Emoji_Presentation}/u

    for (const [key, value] of Object.entries(en)) {
      if (typeof value === 'string') {
        expect(emojiRegex.test(value)).toBe(false),
          `Found emoji in en.json key "${key}": ${value}`
      }
    }
  })

  // Test that no French locale value contains emoji
  it('French locale has no emoji characters', () => {
    const emojiRegex = /\p{Emoji_Presentation}/u

    for (const [key, value] of Object.entries(fr)) {
      if (typeof value === 'string') {
        expect(emojiRegex.test(value)).toBe(false),
          `Found emoji in fr.json key "${key}": ${value}`
      }
    }
  })

  // Test that no Tagalog locale value contains emoji
  it('Tagalog locale has no emoji characters', () => {
    const emojiRegex = /\p{Emoji_Presentation}/u

    for (const [key, value] of Object.entries(tl)) {
      if (typeof value === 'string') {
        expect(emojiRegex.test(value)).toBe(false),
          `Found emoji in tl.json key "${key}": ${value}`
      }
    }
  })
})
