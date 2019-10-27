var nilai = 79;
var predikat;
if (nilai > 80) {
    predikat = 'A';
} else if (nilai > 70) {
    predikat = 'B';
} else if (nilai > 60) {
    predikat = 'C';
}
else {
    predikat = 'D';
}

var kkm = 75;

if (nilai > kkm) {
    if (predikat == 'A') {
        console.log('lulus dengan memuaskan');
    }
    else {
        console.log('lulus dengan cukup');
    }
} else {
    console.log('tidak lulus')
}