function LoadScript(src, integrity, head = true) {
    var s = document.createElement('script');
    s.src = src; s.integrity = integrity; s.type = 'text/javascript';
    s.crossOrigin = "anonymous";
    (head ? document.head : document.body).appendChild(s);
    s.onload = () => console.log(`Script ${src} carregado!`);
    s.onerror = () => console.error(`Erro ao carregar ${src}`);
}


LoadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r");
LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz");
LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js", "sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy");
LoadScript("https://code.jquery.com/jquery-3.7.1.min.js", "sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=")

