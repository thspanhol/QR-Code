document
  .getElementById("linkForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const linkInput = document.getElementById("linkInput").value;
    const numeroChamado = document.getElementById("numeroChamado").value;
    if (linkInput && numeroChamado) {
      const qrCodeUrl = `qrcode.html?link=${encodeURIComponent(
        linkInput
      )}&numeroChamado=${encodeURIComponent(numeroChamado)}`;
      window.location.href = qrCodeUrl;
    }
  });
