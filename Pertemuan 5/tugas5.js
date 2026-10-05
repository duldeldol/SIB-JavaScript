// TUGAS PERTEMUAN 5 JS - MANAJEMEN PRODUK TOKO ONLINE

// **Data Produk** (Minimal 5 data produk awal)
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Smartwatch", harga: 1500000 },
    { id: 4, nama: "Headphone", harga: 800000 },
    { id: 5, nama: "Keyboard Mechanical", harga: 1200000 }
    // minimal 5 data produk
];

// **Event Listener & Event Handler**
const eventHandler = {
    // Koleksi listener untuk event
    listeners: {},

    // Method untuk mendaftarkan event listener
    on(event, listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    },

    // Method untuk memicu (emit) event
    emit(event, ...args) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(listener => listener(...args));
        }
    },

    // Fungsi handler bebas untuk notifikasi aksi produk
    notifikasiTambah(produk) {
        console.log(`[EVENT] Produk "${produk.nama}" (ID: ${produk.id}) berhasil ditambahkan.`);
    },
    notifikasiHapus(ids) {
        console.log(`[EVENT] Produk dengan ID: [${ids.join(", ")}] berhasil dihapus.`);
    }
};

// Registrasi Event Listener
eventHandler.on("produkDitambahkan", (produk) => eventHandler.notifikasiTambah(produk));
eventHandler.on("produkDihapus", (ids) => eventHandler.notifikasiHapus(ids));


// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
    const produkBaru = { id, nama, harga };
    // Menggunakan Spread Operator untuk menggabungkan produk lama dengan produk baru
    produkList = [...produkList, produkBaru];

    // Memicu Event Listener setelah produk berhasil ditambahkan
    eventHandler.emit("produkDitambahkan", produkBaru);
}


// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...ids) {
    // Rest parameter (...ids) memungkinkan penghapusan satu atau banyak ID sekaligus
    const jumlahAwal = produkList.length;
    produkList = produkList.filter(produk => !ids.includes(produk.id));

    if (produkList.length < jumlahAwal) {
        // Memicu Event Listener setelah produk berhasil dihapus
        eventHandler.emit("produkDihapus", ids);
    } else {
        console.log(`[PERINGATAN] Produk dengan ID [${ids.join(", ")}] tidak ditemukan.`);
    }
}


// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    console.log("\n==================== DAFTAR PRODUK TOKO ====================");
    if (produkList.length === 0) {
        console.log("Katalog kosong, belum ada produk yang tersedia.");
    } else {
        produkList.forEach(produk => {
            // Menggunakan Destructuring untuk mengekstrak properti id, nama, dan harga
            const { id, nama, harga } = produk;
            const hargaFormatted = `Rp ${harga.toLocaleString("id-ID")}`;
            console.log(`ID: ${id} | Nama: ${nama.padEnd(22)} | Harga: ${hargaFormatted}`);
        });
    }
    console.log("============================================================\n");
}


// PENGUJIAN

// 1. Menampilkan daftar produk awal
console.log("--- 1. MENAMPILKAN PRODUK AWAL ---");
tampilkanProduk();

// 2. Contoh penambahan data (menggunakan ID 6 karena ID 1-5 ada pada data awal)
console.log("--- 2. MENAMBAHKAN PRODUK BARU ---");
tambahProduk(6, "Tablet", 7000000);
tampilkanProduk();

// 3. Contoh penghapusan data
console.log("--- 3. MENGHAPUS PRODUK (ID: 2) ---");
hapusProduk(2);
tampilkanProduk();
