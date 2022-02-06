require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture strong reflect still attitude hover end army gather'; 
let testAccounts = [
"0x21565e0c9dad83d1b207ec3c5ec4c41443ef4021e9ebb81ec31211fc9d7a631a",
"0x450c6082d5c66f52a71e73cde3c95d8badb092d70864816a5f7abb1023c7a7dd",
"0xb1d8782b51d75e7ef698884dbb64ae458d4e22478e0019e15587df71bc627acc",
"0xe29288dad78a8b7e2b6378425141c1298a5ea3b6637a697a6fbed58a1301c294",
"0x4371ec3d461b95e423a37fb772426f38ce3c9ec4f7033c8cfec9a5287cecabd4",
"0x0fcb82e53d16e694aad8a7b74212df22a6d8b53b3bcdfcbb2338188bd5f632bf",
"0x55f2ed024532f41e9083160cad9bbcccaf5e3ed6e5f3f208c440647f5bc7a577",
"0xf3a9c468f0638acc2d30dbcbc0a9e588b1a0a3ffa337c9d87244c3c940751c85",
"0x514ad0e0f7428e04105b70c78d9d8942527819718cf7294b94c271a4d6de056a",
"0x60f80e95825304b12a566a837cf0a51a545605879f39a49532fdfec179cd023d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


