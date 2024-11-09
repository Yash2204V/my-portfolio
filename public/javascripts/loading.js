window.addEventListener('load', async function() {
    try {
        const res = await fetch('loading.html');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.text();
        document.getElementById('loading-screen').innerHTML = data;
        setTimeout(function() {
            document.getElementById('loading-screen').innerHTML = "";
            window.location.href = 'home.html'; // Redirect to home.html
        }, 5000);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
});