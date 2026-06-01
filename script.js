import {id} from "./dependencies.js"
import sample from "./sampleArray.json" with {type:"json"}

let panelParent = id("panelParent");
let rowWidth = window.innerWidth / 10
let colNum = Math.floor(window.innerHeight / rowWidth)
panelParent.style.margin = `${(((window.innerHeight / rowWidth) - colNum) * rowWidth) / 2}px 0`

let completedTiles = []
for (let row = 0; row < sample.length; row++) {
    for (let col = 0; col < sample[row].length; col++) {
        if (!completedTiles.includes(sample[row][col])) {
            let width = 1
            for (let i = col + 1; i < sample[row].length; i++) {
                if (sample[row][i] === sample[row][col]) {
                    width += 1
                } else {
                    break
                }
            }
            let height = 1
            for (let i = row + 1; i < sample.length; i++) {
                if (sample[i][col] === sample[row][col]) {
                    height += 1
                } else {
                    break
                }
            }
            completedTiles.push(sample[row][col])
            let element = panelParent.createElement("div")
            element.createElement("div", "panel").createElement("div").textContent = sample[row][col]
            element.style.aspectRatio = `${width} / ${height}`
            element.style.gridRow = `span ${height}`
            element.style.gridColumn = `span ${width}`
        }
    }
}