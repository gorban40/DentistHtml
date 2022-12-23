function activeSections () {
    const priceSection = document.querySelector("#priceSection"),
          worrySection = document.querySelector("#worrySection"),
          priceTrigger = document.querySelectorAll(".trigger__price"),
          worryTrgigger = document.querySelectorAll('.trigger__worry');
    
    priceTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            priceSection.style.display = 'block';
            worrySection.style.display = 'none';
        })
    })
    worryTrgigger.forEach(btn => {
        btn.addEventListener('click', () => {
            priceSection.style.display = 'none';
            worrySection.style.display = 'block';
        })
    })
    
}

export default activeSections;