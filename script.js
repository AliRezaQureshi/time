let time = document.querySelector(".time");

setInterval(()=> {
    time.textContent = new Date().toLocaleTimeString()
}, 1000
)