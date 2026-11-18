"use strict";
const voucherForm = document.getElementById("voucherForm");
const customerNameInput = document.getElementById("customerName");
const customerClassInput = document.getElementById("customerClass");
const transactionCodeInput = document.getElementById("transactionCode");
const voucherTypeInput = document.getElementById("voucherType");
const quantityInput = document.getElementById("quantity");
const paymentInput = document.getElementById("payment");

voucherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const namaPelanggan = customerNameInput.value.trim();
  const namaKapital = namaPelanggan.toUpperCase();
  const namaVoucher = voucherTypeInput.options[voucherTypeInput.selectedIndex].dataset.name;
  const namaVoucherKecil = namaVoucher.toLowerCase();
  const hargaVoucher = Number(voucherTypeInput.value);
  const jumlahVoucher = Number(quantityInput.value);
  const uangPembayaran = Number(paymentInput.value);
  const subtotal = hargaVoucher * jumlahVoucher;
  const diskon = subtotal * 5 / 100;
  const biayaAdministrasi = 1000;
  const totalPembayaran = subtotal - diskon + biayaAdministrasi;
  const uangKembalian = uangPembayaran - totalPembayaran;
  const jumlahKarakterNama = namaPelanggan.length;

  document.getElementById("outName").textContent = namaKapital;
  document.getElementById("outClass").textContent = customerClassInput.value.trim().toUpperCase();
  document.getElementById("outCode").textContent = transactionCodeInput.value.trim().toUpperCase();
  document.getElementById("outVoucher").textContent = namaVoucher;
  document.getElementById("outPrice").textContent = "Rp" + hargaVoucher.toLocaleString("id-ID");
  document.getElementById("outQty").textContent = jumlahVoucher;
  document.getElementById("outSubtotal").textContent = "Rp" + subtotal.toLocaleString("id-ID");
  document.getElementById("outDiscount").textContent = "− " + "Rp" + diskon.toLocaleString("id-ID");
  document.getElementById("outAdmin").textContent = "Rp" + biayaAdministrasi.toLocaleString("id-ID");
  document.getElementById("outTotal").textContent = "Rp" + totalPembayaran.toLocaleString("id-ID");
  document.getElementById("outPayment").textContent = "Rp" + uangPembayaran.toLocaleString("id-ID");
  document.getElementById("outChange").textContent = "Rp" + uangKembalian.toLocaleString("id-ID");
  document.getElementById("note").textContent = "Voucher lowercase: " + namaVoucherKecil + " · Jumlah karakter nama: " + jumlahKarakterNama;
  document.getElementById("status").textContent = "SELESAI";

  const laporanTransaksi = `SMART VOUCHER
Nama pelanggan: ${namaKapital}
Kelas: ${customerClassInput.value}
Kode transaksi: ${transactionCodeInput.value}
Jenis voucher: ${namaVoucher}
Jenis voucher lowercase: ${namaVoucherKecil}
Harga voucher: ${hargaVoucher}
Jumlah voucher: ${jumlahVoucher}
Subtotal: ${subtotal}
Diskon 5%: ${diskon}
Biaya administrasi: ${biayaAdministrasi}
Total pembayaran: ${totalPembayaran}
Uang pembayaran: ${uangPembayaran}
Uang kembalian: ${uangKembalian}
Jumlah karakter nama: ${jumlahKarakterNama}
Tipe data nama: ${typeof namaPelanggan}
Tipe data harga: ${typeof hargaVoucher}
Tipe data jumlah: ${typeof jumlahVoucher}`;
  document.getElementById("consolePreview").textContent = laporanTransaksi;
  console.log(laporanTransaksi);
  console.log("Pemeriksaan typeof:", typeof namaPelanggan, typeof hargaVoucher, typeof jumlahVoucher);
});

const testCases = {
  A: { price: "2000", quantity: "5", payment: "20000", code: "SV-TEST-A" },
  B: { price: "10000", quantity: "3", payment: "50000", code: "SV-TEST-B" },
  C: { price: "25000", quantity: "2", payment: "60000", code: "SV-TEST-C" },
  D: { price: "75000", quantity: "1", payment: "100000", code: "SV-TEST-D" }
};
document.getElementById("testA").addEventListener("click", () => {
  voucherTypeInput.value = testCases.A.price; quantityInput.value = testCases.A.quantity; paymentInput.value = testCases.A.payment; transactionCodeInput.value = testCases.A.code; voucherForm.requestSubmit();
});
document.getElementById("testB").addEventListener("click", () => {
  voucherTypeInput.value = testCases.B.price; quantityInput.value = testCases.B.quantity; paymentInput.value = testCases.B.payment; transactionCodeInput.value = testCases.B.code; voucherForm.requestSubmit();
});
document.getElementById("testC").addEventListener("click", () => {
  voucherTypeInput.value = testCases.C.price; quantityInput.value = testCases.C.quantity; paymentInput.value = testCases.C.payment; transactionCodeInput.value = testCases.C.code; voucherForm.requestSubmit();
});
document.getElementById("testD").addEventListener("click", () => {
  voucherTypeInput.value = testCases.D.price; quantityInput.value = testCases.D.quantity; paymentInput.value = testCases.D.payment; transactionCodeInput.value = testCases.D.code; voucherForm.requestSubmit();
});
voucherForm.addEventListener("reset", () => {
  document.getElementById("status").textContent = "SIAP";
  document.getElementById("note").textContent = "Form telah direset. Isi data transaksi untuk memulai.";
  document.getElementById("consolePreview").textContent = "Form direset. Klik Hitung Transaksi untuk mencatat hasil ke Console.";
});
