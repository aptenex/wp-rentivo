export function flattenArray(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray.push(...flattenArray(array[i]));
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
}
