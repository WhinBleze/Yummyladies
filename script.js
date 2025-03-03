function pesan(menu) {
    let nomorWA = "+62 882-2937-9506"; // Ganti dengan nomor WhatsApp toko
    let pesan = `Urang ek mesen risoles 100 pcs. ${menu}. Bisa diproses?`;
    let urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    
    window.location.href = urlWA;
}
