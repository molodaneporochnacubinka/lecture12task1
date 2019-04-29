export default class Team {
  constructor() {
    this.characters = new Set();
  }

  add(character) {
    this.characters.add(character);
  }

  addALL(...characters) {
    characters.forEach((character) => {
      this.characters.add(character);
    });
  }

  toArray() {
    return [...this.characters];
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.characters.size - 1;
    const array = this.toArray();
    return {
      next() {
        if (current <= last) {
          current += 1;
          return {
            done: false,
            value: array[current - 1],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
