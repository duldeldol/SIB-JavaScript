// TUGAS PERTEMUAN 6 JS - CONTROLLER DATA USERS
// File: controller.mjs

import users from "./data.mjs";

// 1. Fungsi Melihat / Menampilkan Data (Menggunakan map())
const index = () => {
    console.log("\n================================================ DAFTAR DATA USERS ================================================");
    if (users.length === 0) {
        console.log("Tidak ada data pengguna yang tersedia.");
    } else {
        users.map((user, i) => {
            const { nama, umur, alamat, email } = user;
            console.log(`${(i + 1).toString().padStart(2)}. Nama: ${nama.padEnd(26)} | Umur: ${umur.toString().padEnd(3)} | Alamat: ${alamat.padEnd(34)} | Email: ${email}`);
        });
    }
    console.log("===================================================================================================================\n");
};

// 2. Fungsi Menambah Data (Menggunakan push)
const store = (user) => {
    users.push(user);
    console.log(`[BERHASIL] Data "${user.nama}" berhasil ditambahkan.`);
};

// 3. Fungsi Menghapus Data (Menghapus data terakhir)
const destroy = () => {
    if (users.length > 0) {
        const deletedUser = users.pop();
        console.log(`[BERHASIL] Data "${deletedUser.nama}" berhasil dihapus.`);
    } else {
        console.log("[PERINGATAN] Daftar pengguna kosong, tidak ada data yang dapat dihapus.");
    }
};

export { index, store, destroy };
