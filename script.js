import {id} from "./dependencies.js"

let panelParent = id("panelParent");
let rowWidth = window.innerWidth / 10
let colNum = Math.floor(window.innerHeight / rowWidth)
for (let i = 0; i < colNum; i++) {
    for (let j = 0; j < 10; j++) {
        panelParent.createElement("div").createElement("div").createElement("div").textContent = `Row: ${j} / Col: ${i}`
    }
}
panelParent.style.margin = `${(((window.innerHeight / rowWidth) - colNum) * rowWidth) / 2}px 0`