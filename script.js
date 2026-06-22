document.getElementById('discordForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Sayfanın yenilenmesini önler

    const mesajGirdisi = document.getElementById('kullaniciMesaji');
    const mesaj = mesajGirdisi.value;

    // Kendi Discord Webhook linkini aşağıdaki tırnakların içine yapıştır:
    const webhookURL = "https://discord.com/api/webhooks/1517433852908277900/R_qDQkZB2lzxkxk58f7uTgtxXdLBR0OnGmknvGIQMy8VM_nXkuNC2nRB58ufF7HTYqkX";

    // Discord'a gidecek mesajın formatı
    const veri = {
        content: `💬 **Siteden Yeni Mesaj Geldii!** \n> ${mesaj}`
    };

    // İsteği gönderme işlemi
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(veri)
    })
    .then(response => {
        if (response.ok) {
            alert('Mesaj başarıyla Discord\'a gönderildi! ✅');
            mesajGirdisi.value = ''; // Kutuyu temizle
        } else {
            alert('Mesaj gönderilirken bir hata oluştu. ❌');
        }
    })
    .catch(error => {
        console.error('Hata:', error);
        alert('Bağlantı hatası oluştu!');
    });
});
