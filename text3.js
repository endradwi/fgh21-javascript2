
const nilaiAwal = 5;
const nilaiAkhir = 20;
const dataArray = [2, 25, 4, 14, 17, 30, 8];

if (nilaiAwal > nilaiAkhir) {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
} else if (dataArray.length < 5) {
    console.log("Jumlah angka dalam dataArray harus lebih dari 5");
} else {
    let result = [];

    for (let i = 0; i < dataArray.length; i++) {
        const num = dataArray[i];
        if (num > nilaiAwal){
            if (num < nilaiAkhir) {
                result = [...result, num];
            }
        }
    }
    if (result.length === 0) {
        console.log("Nilai tidak ditemukan");
    } else {
        // Penerapan Bubble Sort
        for(let i=0; i < result.length-1; i++){
            for(let j=0; j < result.length-1-i; j++){
              if (result[j] > result[j+1]){
                  let sorting = result[j];
                  result[j] = result[j+1];
                  result[j+1] = sorting;
              }
          }
      }
        console.log(result);
    }
    
}
   