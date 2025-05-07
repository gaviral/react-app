declare module 'get-contrast' {
  interface Contrast {
    ratio(color1: string, color2: string): number;
    score(color1: string, color2: string): 'AAA' | 'AA' | 'A' | 'F'; // Simplified, might need adjustment
    isAccessible(color1: string, color2: string): boolean; // Check AA or better
  }
  const contrast: Contrast;
  export default contrast;
} 