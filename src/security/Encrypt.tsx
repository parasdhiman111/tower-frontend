import CryptoJS from 'crypto-js';

function Encrypt(data: string): string {
  const KEY = CryptoJS.enc.Utf8.parse('B374A26A71490437AA024E4FADD5B497');
  const IV = CryptoJS.enc.Utf8.parse('7E892875A52C59A3'); 

  console.log("-----------------------------");
  console.log(KEY);
  console.log(IV);

  let cipher = CryptoJS.AES.encrypt(data, KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});
return cipher.toString();
}

export default Encrypt;
