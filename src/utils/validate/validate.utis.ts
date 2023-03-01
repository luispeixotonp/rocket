export class Validate {
  static isNotEmpty(value: string): boolean {
    return value !== undefined && value !== null && value !== '';
  }

  static isNotUrl(value: string): boolean {
    const regex = new RegExp('^(http|https)://', 'i');
    const isValid = regex.test(value);

    return isValid;
  }

}