//doWhile

let total = 0;

do {
  let input = prompt("Masukkan angka kamu (ketik 'selesai' untuk mengakhiri program):");

  if (input === null || input.toLowerCase() === 'selesai') {
    break;
  }

  let bilangan = parseFloat(input);

  if (isNaN(bilangan)) {
    alert("Masukkan angka yang valid!");
  } else {
    total = total + bilangan;
  }
} while (true);

alert(`Total penjumlahan angka kamu adalah: ${total}`);

//for

const buah = ["Apel", "Jeruk", "Pisang", "Mangga","Sirsak","Durian"];
for (let i = 0; i < buah.length; i++) {
  console.log("Buah ke-" + i + ": " + buah[i]);
}

//function

function randomNilai(){
  const randomNumber = ~~(Math.random()*1000)
  if(randomNumber > 500){
      console.log('woww lebih dari 500 karena berisi :', randomNumber)
  }else{
      console.log(randomNumber)
  }
}
randomNilai()

function barisKata(){ 
  for (let i=0; i < arguments.length; i++){
      console.log(arguments[i])
  }
}
barisKata('Hello','World','Ini Baris ke 3','Ini baris ke 4') 

//ifelse 

let saldoAwal = 2000000;
let saldoTarik;
let kondisi;

alert (`Anda memiliki saldo sebesar Rp.${saldoAwal},00.`);
kondisi = prompt (`Apakah anda mau menarik uang? (Y/T)`);

if(kondisi === "Y"){
    saldoTarik = prompt (`Masukkan nominal uang yang ingin anda tarik`);
    alert (`Uang berhasil ditarik, dan saldo anda sekarang berjumlah Rp.${saldoAwal - saldoTarik},00`);
} else {

}


//nestedif

var nilai = prompt("Masukkan nilai Anda:");

nilai = parseFloat(nilai);

if (!isNaN(nilai)) {
  if (nilai >= 80) {
    alert (`nilai kamu ${nilai} adalah A`);
    console.log("Selamat! Anda mendapatkan nilai A");
  } else if (nilai >= 70) {
    alert (`nilai kamu ${nilai} adalah B`);
    console.log("Anda mendapatkan nilai B");
  } else if (nilai >= 60) {
    alert (`nilai kamu ${nilai} adalah C`);
    console.log("Anda mendapatkan nilai C");
  } else if (nilai >= 50) {
    alert (`nilai kamu ${nilai} adalah D`);
    console.log("Anda mendapatkan nilai D");
  } else {
    alert (`nilai kamu ${nilai} adalah E`);
    console.log("Maaf, Anda mendapatkan nilai E");
  }
} else {
    alert ("Mohon masukkan angka yang valid.");
    console.log("Mohon masukkan angka yang valid.");
}

//switchCase

let hari = new Date().getDay();

switch(hari) {
    case 0:
        hari = 'Minggu';
        break;
    case 1:
        hari = 'Senin';
        break;
    case 2:
        hari = 'Selasa';
        break;
    case 3:
        hari = 'Rabu';
        break;
    case 4:
        hari = 'Kamis';
        break;
    case 5:
        hari = 'Jumat';
        break;
    case 6:
        hari = 'Sabtu';
        break;
}

alert(`Hari ini adalah hari ${hari}`);


//while

let TOTAL = 0;
let count = 0;

while (true) {
  let input = prompt("Masukkan angka (masukkan angka negatif untuk berhenti):");

  let number = parseFloat(input);

  if (isNaN(number) || number < 0) {
    break;
  }

  TOTAL= TOTAL + number;
  count++;
}

let average = TOTAL/ count;

alert(`Rata-rata dari angka-angka yang dimasukkan adalah: ${average}`);
