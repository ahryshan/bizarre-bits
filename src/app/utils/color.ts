import {MathUtils} from '~utils/math-utils'

export class Color {
  public r: number = 0x00
  public g: number = 0x00
  public b: number = 0x00
  public a: number = 0xFF

  constructor(color?: string)
  constructor(color: Color)
  constructor(color: string | Color = '#000000FF') {
    if (color instanceof Color) {
      this.r = color.r
      this.g = color.g
      this.b = color.b
      this.a = color.a
      return
    }

    const strippedColor = color.replace('#', '')
    this.r = Number.parseInt(strippedColor.slice(0, 2), 16)
    this.g = Number.parseInt(strippedColor.slice(2, 4), 16)
    this.b = Number.parseInt(strippedColor.slice(4, 6), 16)
    if (strippedColor.length === 8) {
      this.a = Number.parseInt(strippedColor.slice(6, 8), 16)
    } else {
      this.a = 0xFF
    }
  }

  public darken(value: number): Color {
    const color = new Color(this)
    color.r = Math.floor(color.r - color.r * value)
    color.g = Math.floor(color.g - color.g * value)
    color.b = Math.floor(color.b - color.b * value)

    return Color.clampColor(color)
  }

  public lighten(value: number): Color {
    const color = new Color(this)
    color.r = Math.floor(color.r + color.r * value)
    color.g = Math.floor(color.g + color.g * value)
    color.b = Math.floor(color.b + color.b * value)

    return Color.clampColor(color)
  }

  private static clampColor(color: Color): Color {
    const clamped = new Color(color)
    clamped.r = MathUtils.clamp(0, 255, clamped.r)
    clamped.g = MathUtils.clamp(0, 255, clamped.g)
    clamped.b = MathUtils.clamp(0, 255, clamped.b)
    return clamped
  }

  public toString(): string {
    const result = (
      '#'
      + this.r.toString(16).padStart(2, '0')
      + this.g.toString(16).padStart(2, '0')
      + this.b.toString(16).padStart(2, '0')
      + this.a.toString(16).padStart(2, '0')
    ).toUpperCase()

    console.log(result)
    return result
  }
}

export const randomColor = (minColor = new Color(), maxColor = new Color('#FFFFFF')): Color => {
  const resultColor = new Color()

  resultColor.r = minColor.r + Math.floor(Math.random() * (maxColor.r - minColor.r))
  resultColor.g = minColor.g + Math.floor(Math.random() * (maxColor.g - minColor.g))
  resultColor.b = minColor.b + Math.floor(Math.random() * (maxColor.b - minColor.b))
  resultColor.a = minColor.a + Math.floor(Math.random() * (maxColor.a - minColor.a))

  return resultColor
}