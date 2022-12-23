function sendBtn () {
    const btns = document.querySelectorAll(".btn__send");

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            btn.classList.add('active');
            const text = btn.querySelector(".btn__send_text");
            text.innerHTML = "Дякуємо";
            setTimeout(() => {
                text.innerHTML = "Залашити заявку";
                btn.classList.remove("active");
            }, 5000);
        })
    })
}

export default sendBtn;