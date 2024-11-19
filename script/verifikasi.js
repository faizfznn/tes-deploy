document.getElementById("verifikasiForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Tampilkan overlay
    const loadingOverlay = document.getElementById("loadingOverlay");
    loadingOverlay.style.display = "flex";

    // Simulasikan proses loading
    setTimeout(() => {
        // Sembunyikan overlay dan alihkan ke halaman home
        loadingOverlay.style.display = "none";
        window.location.href = "index.html"; // Redirect ke halaman home
    }, 1000); // 3 detik durasi loading
});