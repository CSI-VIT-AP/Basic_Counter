let counterEle = document.getElementById("counterValue");

function increaseCounter() {
    let previous = counterEle.textContent;
    let updated = parseInt(previous) + 1;
    counterEle.textContent = updated
    if (updated > 0) {
        counterEle.style.color = "green"
    } else if (updated < 0) {
        counterEle.style.color = "red"
    } else {
        counterEle.style.color = "black"
    }
}

function decreaseCounter() {
    let previous = counterEle.textContent;
    let updated = parseInt(previous) - 1;
    counterEle.textContent = updated
    if (updated > 0) {
        counterEle.style.color = "green"
    } else if (updated < 0) {
        counterEle.style.color = "red"
    } else {
        counterEle.style.color = "black"
    }
}

function resetCounter() {
    let updated = 0;
    counterEle.textContent = updated;
    counterEle.style.color = "black"
}
