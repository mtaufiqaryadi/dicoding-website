// var namaSaya = 'taufiq';

// function cetakNama() {
//     console.log(namaSaya);
// }
// cetakNama();

//latihan
// x = 5;
// function kuadrat() {
//     x *= x;
// }
// console.log(x);
// kuadrat();
// console.log(x);

//argumen
// function welcome(nama) {
//     console.log('selamat datang ' + nama);
// }
// welcome('taufiq');
// var username = 'fadli';
// welcome(username);

// function profil(nama, asal) {
//     console.log('nama saya ' + nama);
//     console.log('saya berasal dari ' + asal);
// }
// profil('taufiq', 'salatiga');

//argumen default
// function cetakPesan(nama, bahasa = 'id') {
//     switch (bahasa) {
//         case 'id':
//             console.log('selamat datang ' + nama);
//             break;
//         case 'en':
//             console.log('welcome ' + nama);
//             break;
//         default:
//             console.log('bahasa ' + bahasa + ' tidak tersedia');
//             break;
//     }
// }
// cetakPesan('taufiq', 'it');

//argumen referensi
// var angka = { key: 10 };
// function kuadrat(angka) {
//     angka.key *= angka.key;
// }
// console.log(angka['key']);
// kuadrat(angka);
// console.log(angka['key']);

//return value
var tanggal = Date();
console.log(tanggal);

function luasPersegi(sisi) {
    var luas = sisi * sisi;
    return luas;
}

var sisi = 10;
var hasil = luasPersegi(sisi);
console.log(hasil);

function luasLingkaran(x, diameter = true) {
    const pi = 3.14;
    var luas = 0;
    if (diameter == true) {
        luas = 1 / 4 * pi * x * x;
    } else {
        luas = pi * x * x;
    }
    return luas;
}
console.log(luasLingkaran(14))
console.log(luasLingkaran(7, false))