export function getExternalImageDimensions(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve({height: img.height, width: img.width});
    img.onerror = reject;
    img.src = src;
  });
}
