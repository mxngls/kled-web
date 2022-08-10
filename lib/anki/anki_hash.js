// The logic in this module were copied from:
// https://github.com/kerrickstaley/genanki/blob/master/genanki/util.py

const BASE91_TABLE = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4',
  '5', '6', '7', '8', '9', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':',
  ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']

export default async function ankiHash(fields) {
    const hashStr = fields.join('__')

    // Get the first 8 bytes of the SHA256 of hashStr as an integer
    const encoder = new TextEncoder();
    const data = encoder.encode(hashStr);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));      
    let hashInt = 0n
    for (let i = 0; i < 8; i++) {
        hashInt *= 256n
        hashInt += BigInt(hashArray[i])
    }

    // Convert to the weird base91 format that Anki uses
    let guid = []
    while (hashInt > 0) {
        guid.push(BASE91_TABLE[hashInt % 91n])
        hashInt = hashInt / 91n
    }
    return guid.reverse().join('')
}
