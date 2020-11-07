export function isEmpty(value?: string | number | boolean): boolean {
  if (value && value.toString().trim().length !== 0) {
    return false;
  }
  return true;
}
