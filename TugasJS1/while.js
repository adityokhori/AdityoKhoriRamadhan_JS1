let total = 0;
let count = 0;

while (true) {
  let input = prompt("Masukkan angka (masukkan angka negatif untuk berhenti):");

  let number = parseFloat(input);

  if (isNaN(number) || number < 0) {
    break;
  }

  total = total + number;
  count++;
}

let average = total / count;

alert(`Rata-rata dari angka-angka yang dimasukkan adalah: ${average}`);
