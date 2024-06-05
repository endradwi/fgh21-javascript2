// 1. Length : Length adalah data dari suatu String yang nilainya berisi panjang string dalam unit kode UTF-16.

const nama = 'Endra'
console.log(nama.length)

// 2. Date : Objek JavaScript Date mewakili satu momen dalam format yang tidak bergantung pada platform.
const tanggal = new Date()
console.log( tanggal.toDateString() )

// 3. Metode Math.random()statis mengembalikan angka pseudo-acak floating-point yang lebih besar dari atau sama dengan 0 dan kurang dari 1, 
// dengan distribusi yang kira-kira seragam pada rentang tersebut — yang kemudian dapat Anda skalakan ke rentang yang Anda inginkan. 
// Implementasinya memilih benih awal untuk algoritma pembuatan angka acak; itu tidak dapat dipilih atau diatur ulang oleh pengguna
console.log( Math.random() )

// 4. Char at : Metode charAt()nilai String mengembalikan string baru yang terdiri dari satu unit kode UTF-16 pada indeks tertentu.
const kata = 'Lemari.'
console.log(kata.charAt(5))

// 5. String Split : Metode split()nilai Stringmengambil pola dan membagi string ini menjadi daftar substring yang diurutkan dengan mencari polanya, 
// menempatkan substring ini ke dalam array, dan mengembalikan array.
const kalimat = 'ini ibu budi.';
const words = kalimat.split(' ');
console.log(words[2]);
// output: "Budi"
const chars = kalimat.split('');
console.log(chars[8]);
// output: "b"
const strCopy = kalimat.split();
console.log(strCopy);
// output: Array ["ini ibu budi"]

// 6. Velue of : Metode valueOf()nilai Stringmengembalikan nilai string ini

const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"

// 7. Array Join : Metode join()instance Arraymembuat dan mengembalikan string baru dengan menggabungkan semua elemen dalam array ini, 
// dipisahkan dengan koma atau string pemisah tertentu. 
// Jika array hanya memiliki satu item, maka item tersebut akan dikembalikan tanpa menggunakan pemisah.
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

// 8. Array Slice : Metode slice()instance Arraymengembalikan salinan dangkal sebagian array ke dalam objek array baru yang dipilih dari startke end 
// ( endtidak termasuk) di mana startdan endmewakili indeks item dalam array itu. Array asli tidak akan diubah.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

// 9. Array Sort : Metode sort()instance Arraymengurutkan elemen array pada tempatnya dan mengembalikan referensi ke array yang sama, 
// yang sekarang diurutkan. Urutan defaultnya adalah menaik, dibuat dengan mengonversi elemen menjadi string, lalu membandingkan urutan nilai unit kode UTF-16.

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [100, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [100, 100000, 21, 30, 4]

// 10. String Concat : Metode concat()nilai String menggabungkan argumen string ke string ini dan mengembalikan string baru.

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

