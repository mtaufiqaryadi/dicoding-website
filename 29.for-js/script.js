//segitiga
// var a;
// var b;
// var c;
// for (a = 0; a < 5; a++) {
//     for (b = 5; b > a; b--) {
//         document.write('_');
//     }
//     for (c = 0; c <= a; c++) {
//         document.write('*');
//     }
//     document.write('<br>');
// }

//fibonaci
// var input = 10;
// var counter;
// var a = 0;
// var angka1 = 0;
// var angka2 = 1;
// var hasil = 1;
// do {
//     document.write(hasil + ' ');
//     hasil = angka1 + angka2;
//     angka1 = angka2;
//     angka2 = hasil;
//     a++;

// } while (acounter <= input);

//foreach
// var motor = ['cb', 'cbr', 'pro'];
// motor.forEach(function (value, index) {
//     console.log(index + ' ' + value);
// });

//foreach bersarang
var karnivora = ['singa', 'macan'];
var omnivora = ['monyet', 'ayam'];
var binatang = [karnivora, omnivora];

binatang.forEach(function (jenis, index) {
    jenis.forEach(function (nama, index) {
        document.write(index + ' ' + nama + '<br>');
    });
});