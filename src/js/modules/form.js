function form() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        PostData(form);
    });

    function PostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btns = document.querySelectorAll(".btn__send");

            btns.forEach(btn => {
                const text = btn.querySelector(".btn__send_text");
                text.innerHTML = "Loading...";
            });

            var params = {
                from_name: e.target.querySelector("[name=name]").value,
                to_name: 'Доктор',
                name: e.target.querySelector("[name=name]").value,
                phone: e.target.querySelector("[name=phone]").value
            }
            emailjs.send("service_sviudjc", "template_2zq64lc", params)
                .then(function () {
                    btns.forEach(btn => {
                        btn.classList.add('active');
                        const text = btn.querySelector(".btn__send_text");
                        text.innerHTML = "Дякуємо";
                        setTimeout(() => {
                            text.innerHTML = "Залашити заявку";
                            btn.classList.remove("active");
                        }, 5000);
                    })
                    form.reset();
                }, function (error) {
                    btns.forEach(btn => {
                        btn.classList.add('active');
                        btn.classList.add('error');
                        const text = btn.querySelector(".btn__send_text");
                        text.innerHTML = "ERORR";
                        setTimeout(() => {
                            text.innerHTML = "Залашити заявку";
                            btn.classList.remove("active");
                            btn.classList.remove("erorr");
                        }, 5000);
                    })
                    form.reset();
                });
        });
    }
}

export default form;
