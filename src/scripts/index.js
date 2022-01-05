const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = (event) => {
    const isAction = event.target.classList.contains('counter__action');

    if (!isAction) {
        return;
    }

    const oldValue = Number(counterValueElem.textContent);

    const newValue = event.target.dataset.action === 'decrease' 
        ? oldValue - 1
        : oldValue + 1;

    localStorage.setItem('counterValue', newValue);

    counterValueElem.textContent = newValue;
};

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = (event) => {
    counterValueElem.textContent = event.newValue;
}

window.addEventListener('storage', onStorageChange);

const onPageLoad = () => {
    counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
}

document.addEventListener('DOMContentLoaded', onPageLoad);