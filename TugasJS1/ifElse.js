let saldoAwal = 2000000
let saldoTarik
let kondisi

alert (`Anda memiliki saldo sebesar Rp.${saldoAwal},00.`)
kondisi = prompt (`Apakah anda mau menarik uang? (Y/T)`)

if(kondisi = 'Y'){
    saldoTarik = prompt (`Masukkan nominal uang yang ingin anda tarik`)
    alert (`Uang berhasil ditarik, dan saldo anda sekarang berjumlah Rp.${saldoAwal - saldoTarik},00`)
}else{
}
