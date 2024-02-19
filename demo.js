function generateQRCode() {
    var websiteUrl = document.getElementById("websiteUrl").value;
    if (websiteUrl) {
        // Clear Previous QR Code
        document.getElementById("qrcode").innerHTML = "";
        // Generate new QR Code
        new QRCode(document.getElementById("qrcode"), websiteUrl);
    } else {
        alert("Please enter a URL");
    }
}
