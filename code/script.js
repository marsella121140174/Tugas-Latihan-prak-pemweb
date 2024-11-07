function hitungNilai() {
    // Ambil nilai input
    const tugas = parseFloat(document.getElementById("tugas").value);
    const uts = parseFloat(document.getElementById("uts").value);
    const uas = parseFloat(document.getElementById("uas").value);

    // Validasi input
    if (isNaN(tugas) || isNaN(uts) || isNaN(uas) || tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alert("Masukkan nilai antara 0 dan 100 untuk semua komponen.");
        return;
    }

    // Persentase bobot
    const tugasPersen = 0.3;
    const utsPersen = 0.3;
    const uasPersen = 0.4;

    // Hitung rata-rata tertimbang
    const rataRata = (tugas * tugasPersen) + (uts * utsPersen) + (uas * uasPersen);

    // Tentukan nilai huruf
    let nilaiHuruf;
    if (rataRata >= 90) nilaiHuruf = "A";
    else if (rataRata >= 80) nilaiHuruf = "B";
    else if (rataRata >= 70) nilaiHuruf = "C";
    else if (rataRata >= 60) nilaiHuruf = "D";
    else nilaiHuruf = "E";

    // Status kelulusan
    const lulus = rataRata >= 60;
    
    // Tampilkan hasil
    const hasil = document.getElementById("hasil");
    hasil.innerHTML = `
        <p>Rata-rata: ${rataRata.toFixed(2)}</p>
        <p>Nilai Huruf: ${nilaiHuruf}</p>
        <p>Status: <span>${lulus ? "Lulus" : "Gagal"}</span></p>
    `;
    hasil.className = lulus ? "result-box pass" : "result-box fail";
}
