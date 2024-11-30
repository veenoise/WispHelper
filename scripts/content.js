setInterval(() => {
    try {
        const elemTarget = document.querySelector("body > div.bg-muted.flex.min-h-screen.flex-col.items-stretch > main > div > div:nth-child(1) > div");
        elemTarget.style.position = 'sticky';
        elemTarget.style.top = '0';
        elemTarget.style.zIndex = '1';
    } catch {
        
    }
}, 2000)
