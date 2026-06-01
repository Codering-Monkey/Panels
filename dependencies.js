export function id(objectID) {
    return document.getElementById(objectID);
}

HTMLElement.prototype.createElement = function(tag, classList="") {
    let element = document.createElement(tag);
    if (classList) {element.className = classList}
    this.appendChild(element)
    return element
}