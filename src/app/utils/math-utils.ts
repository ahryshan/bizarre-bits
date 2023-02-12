export namespace MathUtils {
  export const clamp = (min: number, max: number, num: number): number => Math.min(Math.max(min, num), max)
}