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
