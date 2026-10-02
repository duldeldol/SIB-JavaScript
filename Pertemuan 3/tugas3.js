// TUGAS PERTEMUAN 3 JS - MANAJEMEN PRODUK TOKO

// 1. Array Data Produk Toko
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// 2. Fungsi Menambahkan Produk Baru
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };
    produkToko.push(produkBaru);
    console.log(`Produk "${nama}" berhasil ditambahkan.`);
}

// 3. Fungsi Menghapus Produk Berdasarkan ID
function hapusProduk(id) {
    let index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        let namaProduk = produkToko[index].nama;
        produkToko.splice(index, 1);
        console.log(`Produk "${namaProduk}" (ID: ${id}) berhasil dihapus.`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
}

// 4. Fungsi Menampilkan Daftar Produk
function tampilkanProduk() {
    console.log("Daftar Produk Toko:");
    console.table(produkToko);
}

// PENGUJIAN

// 1. Menampilkan Produk Awal
console.log("--- 1. MENAMPILKAN PRODUK AWAL ---");
tampilkanProduk();

// 2. Menambahkan Produk Baru
console.log("\n--- 2. MENAMBAHKAN PRODUK BARU ---");
tambahProduk("Speaker", 250000, 5);
tampilkanProduk();

// 3. Menghapus Produk (ID: 1 / Laptop)
console.log("\n--- 3. MENGHAPUS PRODUK (ID: 1) ---");
hapusProduk(1);
tampilkanProduk();