// Fungsi untuk menghitung deret Fibonacci
function hitungFibonacci() {
    const input = document.getElementById('fibonacci-input').value;
    let a = 0, b = 1, result = '';
    
    for (let i = 0; i < input; i++) {
        result += a + ', ';
        const next = a + b;
        a = b;
        b = next;
    }
    
    // Menghapus koma dan spasi ekstra di akhir hasil
    result = result.slice(0, -2);

    document.getElementById('fibonacci-result').textContent = 'Hasil Deret Fibonacci = ' + result;
}

function tampilkanInput() {
    const jenisBangun = document.getElementById('jenis-bangun').value;
    const semuaInput = document.querySelectorAll('#volume-input > div');

    // Sembunyikan semua input
    semuaInput.forEach((input) => {
        input.style.display = 'none';
    });

    // Tampilkan input sesuai dengan jenis bangun yang dipilih
    document.getElementById(jenisBangun + '-input').style.display = 'block';
}

// Panggil tampilkanInput() ketika jenis bangun ruang dipilih
document.getElementById('jenis-bangun').addEventListener('change', tampilkanInput);

function tampilkanInput() {
    const jenisBangun = document.getElementById('jenis-bangun').value;
    const semuaInput = document.querySelectorAll('#volume-input > div');

    // Sembunyikan semua input
    semuaInput.forEach((input) => {
        input.style.display = 'none';
    });

    // Tampilkan input sesuai dengan jenis bangun yang dipilih
    document.getElementById(jenisBangun + '-input').style.display = 'block';
}

// Panggil tampilkanInput() ketika jenis bangun ruang dipilih
document.getElementById('jenis-bangun').addEventListener('change', tampilkanInput);

// Fungsi untuk menghitung volume kubus
function hitungVolumeKubus() {
    const sisiKubus = parseFloat(document.getElementById('sisi-kubus').value);

    const volumeKubus = Math.pow(sisiKubus, 3);

    // Tampilkan hasil volume kubus tanpa satuan
    document.getElementById('volume-kubus-result').textContent = 'Volume Kubus = ' + volumeKubus.toFixed(2);
}

// Fungsi untuk menghitung volume balok
function hitungVolumeBalok() {
    const panjangBalok = parseFloat(document.getElementById('panjang-balok').value);
    const lebarBalok = parseFloat(document.getElementById('lebar-balok').value);
    const tinggiBalok = parseFloat(document.getElementById('tinggi-balok').value);

    const volumeBalok = panjangBalok * lebarBalok * tinggiBalok;

    document.getElementById('volume-balok-result').textContent = 'Volume Balok = ' + volumeBalok.toFixed(2);
}

// Fungsi untuk menghitung volume tabung
function hitungVolumeTabung() {
    const jariJariTabung = parseFloat(document.getElementById('jari-jari-tabung').value);
    const tinggiTabung = parseFloat(document.getElementById('tinggi-tabung').value);

    const volumeTabung = Math.PI * Math.pow(jariJariTabung, 2) * tinggiTabung;

    // Menampilkan hasil volume tabung dengan tanda titik sebagai pemisah desimal
    document.getElementById('volume-tabung-result').textContent = 'Volume Tabung = ' + volumeTabung.toFixed(2);
}

// Fungsi untuk menghitung volume kerucut
function hitungVolumeKerucut() {
    const jariJariKerucut = parseFloat(document.getElementById('jari-jari-kerucut').value);
    const tinggiKerucut = parseFloat(document.getElementById('tinggi-kerucut').value);

    const volumeKerucut = (1/3) * Math.PI * Math.pow(jariJariKerucut, 2) * tinggiKerucut;

    document.getElementById('volume-kerucut-result').textContent = 'Volume Kerucut = ' + volumeKerucut.toFixed(2);
}