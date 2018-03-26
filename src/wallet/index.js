import { INITAL_BALANCE } from '../config';
import Util from '../utility';

class Wallet {
  constructor() {
    this.balance = INITAL_BALANCE;
    this.keyPair = Util.genKeyPair();
    this.publicKey = this.keyPair.getPublic().encode('hex');
  }

  toString() {
    return `Wallet -
      publicKey:  ${this.publicKey.toString()}
      balance:    ${this.balance}
    `;
  }
}

export default Wallet;