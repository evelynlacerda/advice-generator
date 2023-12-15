const newAdviceBtn = document.querySelector('.advice-btn')

function replaceDivisorElement() {
    const divisorElement = document.querySelector('.divisor');
    if (window.innerWidth < 768) {
        divisorElement.src = './src/img/divisor-small.svg';
    }
}

replaceDivisorElement();

async function newAdvice() {
    const url = 'https://api.adviceslip.com/advice'
    const response = await fetch(url)
    return await response.json()
}

async function renderAdvice() {
    const advice = await newAdvice()
    const advicePhrase = document.querySelector('.advice-text')
    advicePhrase.innerHTML = `"${advice.slip.advice}"`
}

async function identifyAdviceId() {
    const advice = await newAdvice()
    const adviceId = document.querySelector('.advice-id')
    adviceId.innerHTML = `advice #${advice.slip.id}`
}

newAdviceBtn.addEventListener('click', async () => {
    await renderAdvice()
    await identifyAdviceId()
})
renderAdvice()
identifyAdviceId()