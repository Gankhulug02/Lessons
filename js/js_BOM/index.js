const btn = document.getElementsByTagName("button")[0];

function openWindow() {
    let url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    let features = 'height=600,width=800'
    window.open(url, "", features);
    }

btn.addEventListener("click", openWindow)
