function modals() {
    const buttons = document.querySelectorAll('.btn__modal'),
        close = document.querySelector('.modal__close'),
        modal = document.querySelector('.modalForm');


        let btnPressed = false;


        function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, showMoreOne = true) {
            const trigger = document.querySelectorAll(triggerSelector),
                  modal = document.querySelector(modalSelector),
                  close = document.querySelector(closeSelector),
                  windows = document.querySelectorAll('[data-modal]'),
                  scroll = calcScroll();
            trigger.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
    
                    btnPressed = true;

                    document.querySelector('.promo__slider').style.zIndex = "-1";
    
                    windows.forEach(item => {
                        item.getElementsByClassName.display = 'none';
                        item.classList.add('animated', 'fadeIn')
                    });
    
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scroll}px`;
                    if (showMoreOne == false ) {
                        document.querySelectorAll(triggerSelector).forEach(item => item.remove());
                    } 
                });
            });
    
            close.addEventListener('click', () => {
                windows.forEach(item => {
                    item.style.display = 'none';
                })
                document.querySelector('.promo__slider').style.zIndex = "auto";
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`
            });
    
            modal.addEventListener('click', (e) => {
                if (e.target === modal.childNodes[0] && closeClickOverlay) {
                    windows.forEach(item => {
                        item.style.display = 'none'
                    })
                    
                    document.querySelector('.promo__slider').style.zIndex = "auto";
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`
                }
            });
        }
        function showModalByTime (selector, time) {
            setTimeout(() => {
                let display;
    
                document.querySelectorAll('[data-modal]').forEach(item => {
                    if (getComputedStyle(item).display !== 'none') {
                        display = 'block';
                    }
                });
    
                if (!display) {
                    document.querySelector(selector).style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    let scroll = calcScroll();
                    document.body.style.marginRight = `${scroll}px`;
                }
    
            },time)
        }
        function calcScroll () {
            let div = document.createElement('div');
    
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflow = 'scroll';
            div.style.visibility = 'hidden';
    
            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
    
            return scrollWidth;
        }
        function openScroll(modalSelector) {
            window.addEventListener('scroll', () => {
                let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
    
    
                if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                    document.querySelector(modalSelector).click();
                }
            })
        }
        bindModal('.politic__trigger', '.politic', '.modal__close' );
        bindModal('.btn__modal', '.modalForm', '.modalForm .modal__close');
}
export default modals;