let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let temp = 0

function increment() {
    count += 1
    countEl.textContent = count
}
let saveCount = 0;
function save() {
    saveCount += 1
    let countStr = count
    if (saveCount > 1) {
        temp += countStr
        console.log(temp)
        saveEl.textContent += " - " + countStr
        totalEl.textContent = "Total entries:" + temp
    }
    else {
        temp += countStr
        saveEl.textContent += countStr
        totalEl.textContent = "Total entries: " + temp
    }

    countEl.textContent = 0
    count = 0
}
function reset() {
    countEl.textContent = 0
    count = 0
}
