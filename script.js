document.getElementById('linkForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const linkInput = document.getElementById('linkInput').value;
    if (linkInput) {
        const qrCodeUrl = `qrcode.html?link=${encodeURIComponent(linkInput)}`;
        window.location.href = qrCodeUrl;
    }
});
