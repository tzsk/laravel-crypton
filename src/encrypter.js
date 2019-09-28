import format from './format';
import CryptoJS from 'crypto-js';
import serialize from './serialize';
import unserialize from './unserialize';

export default class Encrypter {
    /**
     * Encrypter constructor.
     * 
     * @param {string} key 
     */
    constructor(key) {
        if (key.startsWith('base64:')) {
            key = key.substr(7);
        }
        this.key = key;
    }

    /**
     * Encrypt data.
     * 
     * @param {any} data 
     * @param {boolean} convert 
     */
    encrypt(data, convert = true) {
        var payload = convert ? serialize(data) : data;

        return CryptoJS.AES.encrypt(payload, CryptoJS.enc.Base64.parse(this.key), {
            format: format(this.key),
            iv: CryptoJS.lib.WordArray.random(16)
        }).toString();
    }

    /**
     * Decrypt string.
     * 
     * @param {string} data 
     * @param {boolean} convert 
     */
    decrypt(data, convert = true) {
        var params = JSON.parse(atob(data));
        var decrypted = CryptoJS.AES.decrypt(params.value, CryptoJS.enc.Base64.parse(this.key), {
            iv: CryptoJS.enc.Base64.parse(params.iv)
        }).toString(CryptoJS.enc.Utf8);

        return convert ? unserialize(decrypted) : decrypted;
    }
}