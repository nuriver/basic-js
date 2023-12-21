const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length: 0,
  arr: [],

  getLength() {
    return this.length;
  },
  addLink(value) {
    if (typeof value === "undefined") {
      this.arr.push("(" + "  " + ")");
      this.length++;
      return this;
    } else {
      this.arr.push("(" + " " + value + " " + ")");
      this.length++;
      return this;
    }
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.arr.length - 1
    ) {
                this.arr = [];
                this.length = 0;
      throw new Error("You can't remove incorrect link!");

    } else {
      this.arr.splice(position - 1, 1);
      this.length--;
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let string = this.arr.join("~~");
    this.arr = [];
    this.length = 0;
    return string;
  },
};



module.exports = {
  chainMaker
};
