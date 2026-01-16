let time = document.querySelector(".time");
let darkBtn = document.querySelector("#darkTheme");
let body = document.body;
setInterval(()=> {
    time.textContent = new Date().toLocaleTimeString("en-US", {hour12:true})
}, 1000
)

darkBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.style.transition = "1s";
    const isDark = body.classList.contains("dark");
    darkBtn.textContent = isDark? "☀️" : "🌙";
})
