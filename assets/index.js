function createQrcode() {
    const qrcodeInput = document.getElementById("qrcodeInput").value;
    const qrcodeImg = document.querySelector('img');
    const errorDiv = document.querySelector('.error');

    console.log(qrcodeInput);
    if (qrcodeInput === '') {
        let errorMsg = document.createElement('p');
        errorMsg.innerText = 'Por favor, preencha o campo abaixo!';
        errorDiv.appendChild(errorMsg)

        setTimeout(() => {
            errorMsg.innerText = '';
        }, 3000);
    } else { 
        const googleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl=';
        const qrCode = googleChartAPI + encodeURIComponent(qrcodeInput);
        qrcodeImg.src = qrCode
    }
}