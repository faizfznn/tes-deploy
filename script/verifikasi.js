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

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    const inputs = form.querySelectorAll("input");
    let valid = true;
    inputs.forEach((input) => {
        if (!input.value) {
            valid = false;
            input.style.border = "1px solid red";
        } else {
            input.style.border = "";
        }
    });
    if (!valid) {
        event.preventDefault();
        alert("Harap isi semua kolom!");
    }
});