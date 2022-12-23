function accordion() {
    const accordionTrigger = document.querySelectorAll('.accordion');

    accordionTrigger.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const attributeImg = img.getAttribute("aria-expanded");

            if(attributeImg === "false") {
                img.setAttribute("aria-expanded", "true");
            } else {
                img.setAttribute("aria-expanded", "false");
            }

            const content = item.querySelector('.accordion-content');
            const attributeContent = content.getAttribute('aria-expanded');

            if(attributeContent === "false") {
                content.setAttribute("aria-expanded", "true");
            } else {
                content.setAttribute("aria-expanded", "false");
            }

        })
    })
}

export default accordion;