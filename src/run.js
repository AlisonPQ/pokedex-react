const secretMessage = `280b0207144e0d1b031e020b4e2f0217420b1d1e0b1c014e1f1b0b4e060f170f1d4e1a0b00070a014e1b004e0c1b0b004e0a070f424e0d01004e031b0d06014e060b020f0a014e0d0103014e1a0b4e091b1d1a0f424e1d0102014e1e1b0b0a014e0b161e1c0b1d0f1c4e03071d4e030b04011c0b1d4e0a0b1d0b011d4e1e0f1c0f4e1a07424e174e031b0d06014e0b16071a014e0b004e1a010a014e02014e1f1b0b4e1a0b4e1e1c011e0100090f1d404e2b1d1e0b1c014e1f1b0b4e1a0b4e091b1d1a0b4e0b1d1a0b4e1e0b1f1b0b9f014e0a0b1a0f02020b4e174e030b4e0a071d0d1b021e014e1e011c4e0f0a0b020f001a0f0a014e1e011c4e060f0c0b1c4e1e1c01080f000f0a014e0f4e1a1b1d4e1e01050b0301000b1d424e4d060f1e1e172c2a0f172c1b020217`;

const message = (secretKey) => secretMessage.match(/.{1,2}/g).map(code => String.fromCharCode([...secretKey].map(c => c.charCodeAt(0)).reduce((a,b) => a ^ b, parseInt(code, 16)))).join('');
//TIP a word that I used to use a lot.
console.log(message('guessthekey'));
