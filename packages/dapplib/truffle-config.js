require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture struggle rebel noble minute harvest flower army gaze'; 
let testAccounts = [
"0x2f2337eb220cffb0b82d7f5274bb0825d86988bc2dbce754c25572aed172af90",
"0x1a334e8c08a93be757adff65427c64d63290f1ee8942d88247446cd5ecefa505",
"0xf8e930714a4f1502c00cf87a1849685791908410c9292aac5952cd7d30735d83",
"0xca30784758d83041857fff3ec939d13a384914fe990bdc808f49cc107fa87968",
"0x6c498bd3f900310d025b334ebdf76b85b114598ff752af1ff42daa3b9dc0a73e",
"0x1cfc27a9e7af54550ef84ac208f4f871a51a942bd06ac7da348eb806ac81f0ca",
"0x2abecd33db5b57df937448a3269cba5136540aaf9dc1cb763537fdc32b16b837",
"0x70cfe56b0af7493749d469c44b7785f23fd6206d19222f4cfc35f0a2058cac97",
"0xd58b9cdfdda39131cb545f8d1298997fdcf4cdb172432c2d07edd089bbda0f1d",
"0x8c109d593957641886a2ea34ebb4928369b33649ef0ceccdb163024d3438483a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
