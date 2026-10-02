// TUGAS PERTEMUAN 4 JS - SISTEM MANAJEMEN TRANSPORTASI

// 1. Class Induk Kendaraan
class Kendaraan {
    constructor(merk, model, tahun) {
        this.merk = merk;
        this.model = model;
        this.tahun = tahun;
    }

    getInfo() {
        return `${this.merk} ${this.model} (${this.tahun})`;
    }
}

// 2. Class Turunan: Mobil
class Mobil extends Kendaraan {
    constructor(merk, model, tahun, jumlahPintu) {
        super(merk, model, tahun);
        this.jumlahPintu = jumlahPintu;
    }

    getInfo() {
        return `${super.getInfo()} - ${this.jumlahPintu} Pintu`;
    }
}

// 3. Class Turunan: Motor
class Motor extends Kendaraan {
    constructor(merk, model, tahun, tipe) {
        super(merk, model, tahun);
        this.tipe = tipe;
    }

    getInfo() {
        return `${super.getInfo()} - Tipe: ${this.tipe}`;
    }
}

// 4. Class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = [];
    }

    // Metode mencatat transaksi penyewaan
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa.push(kendaraan);
        console.log(`${this.nama} berhasil menyewa: ${kendaraan.getInfo()}`);
    }
}

// 5. Array Data Pelanggan
let daftarPelanggan = [];

// 6. Fungsi Menampilkan Pelanggan yang Sedang Menyewa Kendaraan
function tampilkanPelangganMenyewa() {
    console.log("Daftar Pelanggan yang Sedang Menyewa Kendaraan:");
    let penyewa = daftarPelanggan.filter(p => p.kendaraanDisewa.length > 0);

    let dataTabel = [];
    penyewa.forEach(p => {
        p.kendaraanDisewa.forEach(k => {
            dataTabel.push({
                "Nama Pelanggan": p.nama,
                "Nomor Telepon": p.nomorTelepon,
                "Kendaraan yang Disewa": k.getInfo()
            });
        });
    });

    console.table(dataTabel);
}

// PENGUJIAN

// 1. Membuat Data Kendaraan
let mobil1 = new Mobil("Toyota", "Corolla", 2022, 4);
let motor1 = new Motor("Honda", "CBR600RR", 2023, "Sport");

// 2. Membuat Data Pelanggan
let pelanggan1 = new Pelanggan("Budi Sambo", "08123456789");
let pelanggan2 = new Pelanggan("Siti Amizah", "08987654321");
let pelanggan3 = new Pelanggan("Ahmad Fauzi", "08112233445");

daftarPelanggan.push(pelanggan1, pelanggan2, pelanggan3);

// 3. Transaksi Penyewaan Kendaraan
console.log("--- TRANSAKSI PENYEWAAN ---");
pelanggan1.sewaKendaraan(mobil1);
pelanggan2.sewaKendaraan(motor1);

// 4. Menampilkan Daftar Pelanggan yang Sedang Menyewa
console.log("\n--- DAFTAR PENYEWA KENDARAAN ---");
tampilkanPelangganMenyewa();