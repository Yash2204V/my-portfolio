window.addEventListener('load', async function() {
    const res = await fetch('loading.html');
    const data = await res.text();
    document.getElementById('loading-screen').innerHTML = data;
    setTimeout(async function() {
        document.getElementById('loading-screen').innerHTML = "";
        window.location.href = 'home.html'; // Redirect to home.html
    }, 5000);
});