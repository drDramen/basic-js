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
  constructor(type = true) {
    this.type = type;
    this.ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');

    const mode = 'ENCRYPT';

    return this.cryptoFunction(message, key, mode);
  }

  decrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');

    const mode = 'DECRYPT';

    return this.cryptoFunction(message, key, mode);
  }

  cryptoFunction(message, key, mode) {
    const messageU = message.toUpperCase();
    const keyU = key.toUpperCase();
    let encryptMessage = '';

    for (let i = 0, j = 0; i < messageU.length; i++, j++) {
      const messageChar = messageU[i % messageU.length];
      const indexX = this.ABC.indexOf(messageChar);

      if (indexX !== -1) {
        const indexY = this.ABC.indexOf(keyU[j % keyU.length]);
        let indexABC = null;

        if (mode === 'ENCRYPT') {
          indexABC = indexX + indexY >= this.ABC.length
            ? indexX + indexY - this.ABC.length
            : indexX + indexY;
        } else {
          indexABC = indexX - indexY >= 0
            ? indexX - indexY
            : this.ABC.length + indexX - indexY;
        }

        encryptMessage += this.ABC[indexABC];
      } else {
        encryptMessage += messageChar;
        j--;
      }
    }

    return this.type ? encryptMessage : encryptMessage.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
