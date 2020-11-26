export class NumberUtilities {
  public static getRandomId(): number {
    const min = 1;
    const max = 100000;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
