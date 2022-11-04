export class ColorHelper {

  darken(h, s, l) {
    return [h, Math.ceil(s * 1.2), Math.ceil(l * 0.8)];
  };
  
  arrToHsl(arr) {
    return `hsl(${arr[0]}, ${arr[1]}%, ${arr[2]}%)`;
  };

}
