let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerHTML = count
}

function save() {
     let countStr = `${count} - `
    saveEl.innerHTML += countStr
    count = 0
    countEl.innerHTML = count
}
