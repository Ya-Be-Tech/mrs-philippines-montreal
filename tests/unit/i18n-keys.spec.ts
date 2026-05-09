import { describe, it, expect } from 'vitest'
import en from '../../locales/en.json'
import fr from '../../locales/fr.json'
import tl from '../../locales/tl.json'

describe('i18n key parity', () => {
  const enKeys = Object.keys(en).sort()
  const frKeys = Object.keys(fr).sort()
  const tlKeys = Object.keys(tl).sort()

  it('fr has same keys as en', () => {
    expect(frKeys).toEqual(enKeys)
  })

  it('tl has same keys as en', () => {
    expect(tlKeys).toEqual(enKeys)
  })
})

describe('no emoji in locale values', () => {
  const emojiRegex = /\p{Emoji_Presentation}/u

  it('en has no emoji', () => {
    for (const [key, val] of Object.entries(en)) {
      expect(emojiRegex.test(String(val)), `en.${key} contains emoji`).toBe(false)
    }
  })

  it('fr has no emoji', () => {
    for (const [key, val] of Object.entries(fr)) {
      expect(emojiRegex.test(String(val)), `fr.${key} contains emoji`).toBe(false)
    }
  })

  it('tl has no emoji', () => {
    for (const [key, val] of Object.entries(tl)) {
      expect(emojiRegex.test(String(val)), `tl.${key} contains emoji`).toBe(false)
    }
  })
})
