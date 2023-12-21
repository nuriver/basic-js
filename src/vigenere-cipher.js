const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value) {
    if (value === false) {
      this.type = "reverse";
    } else {
      this.type = "direct";
    }
    (this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"),
      (this.regEx = /[.!@#$%^&*()_+-=0-9| ]/);
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let arr = [];
    let lettersCount = 0;


      for (let i = 0; i < message.length; i++) {
        let encryptedLetter =
          this.alphabet[
            this.alphabet.indexOf(message[i].toUpperCase()) +
              this.alphabet.indexOf(`${key[lettersCount]}`.toUpperCase())
          ];

        if (this.regEx.test(message[i])) {
          arr.push(message[i]);
        } else {
          arr.push(encryptedLetter);
          lettersCount++;
          if (lettersCount > key.length - 1) {
            lettersCount = 0;
          }
        }
    }
    if (this.type === "direct") {
       return arr.join("");
    } else {
      return arr.reverse().join("");
     }
  }

  decrypt(message, key) {
        if (message === undefined || key === undefined) {
          throw new Error("Incorrect arguments!");
        }
    let arr = [];
    let lettersCount = 0;

      for (let i = 0; i < message.length; i++) {
        let decryptedLetter =
          this.alphabet[
            this.alphabet.lastIndexOf(message[i].toUpperCase()) -
              this.alphabet.indexOf(`${key[lettersCount]}`.toUpperCase())
          ];

        if (this.regEx.test(message[i])) {
          arr.push(message[i]);
        } else {
          arr.push(decryptedLetter);
          lettersCount++;
          if (lettersCount > key.length - 1) {
            lettersCount = 0;
          }
        }
    }
    if (this.type === "direct") {
return arr.join("");
    } else {
      return arr.reverse().join("");
    }
      
    
  }
}

const directMachine = new VigenereCipheringMachine();
//let regEx = /[^A-za-z]/;
console.log(directMachine.decrypt("HSVD AJAL ^^", "behappy"));


module.exports = {
  VigenereCipheringMachine
};
