var nilai = prompt("Masukkan nilai Anda:");

nilai = parseFloat(nilai);

if (!isNaN(nilai)) {
  if (nilai >= 80) {
    alert (`nilai kamu ${nilai} adalah A`);
    console.log("Selamat! Anda mendapatkan nilai A");
  } else if (nilai >= 70) {
    alert (`nilai kamu ${nilai} adalah A`);
    console.log("Anda mendapatkan nilai B");
  } else if (nilai >= 60) {
    alert (`nilai kamu ${nilai} adalah A`);
    console.log("Anda mendapatkan nilai C");
  } else if (nilai >= 50) {
    alert (`nilai kamu ${nilai} adalah A`);
    console.log("Anda mendapatkan nilai D");
  } else {
    alert (`nilai kamu ${nilai} adalah A`);
    console.log("Maaf, Anda mendapatkan nilai E");
  }
} else {
    alert ("Mohon masukkan angka yang valid.");
    console.log("Mohon masukkan angka yang valid.");
}
