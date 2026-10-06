// TUGAS PERTEMUAN 6 JS - SISTEM MANAJEMEN DATA USERS
// File: main.mjs

import { index, store, destroy } from "./controller.mjs";

const main = () => {
    // 1. Menampilkan data awal (10 Data)
    console.log("--- 1. MENAMPILKAN DATA AWAL ---");
    index();

    // 2. Menambahkan minimal 2 data baru pada proses push
    console.log("--- 2. PROSES PENAMBAHAN DATA (MINIMAL 2 DATA) ---");
    const userBaru1 = {
        nama: "Janardana Wicaksana",
        umur: 33,
        alamat: "Jl. Telaga Sarangan No. 39",
        email: "janardana.w@horizon.id"
    };

    const userBaru2 = {
        nama: "Savitri Dyah Ayuningtyas",
        umur: 24,
        alamat: "Jl. Pantai Parangtritis No. 82",
        email: "savitri.dyah@elysium.dev"
    };

    store(userBaru1);
    store(userBaru2);

    // 3. Menampilkan seluruh data setelah penambahan
    console.log("\n--- 3. MENAMPILKAN DATA SETELAH PENAMBAHAN ---");
    index();

    // 4. Menghapus data
    console.log("--- 4. PROSES PENGHAPUSAN DATA ---");
    destroy();

    // 5. Menampilkan data setelah penghapusan
    console.log("\n--- 5. MENAMPILKAN DATA SETELAH PENGHAPUSAN ---");
    index();
};

// Menjalankan fungsi utama
main();
