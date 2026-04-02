export {keyboard};

function keyboard() {
    let html = '';
    let index = 0;
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';

    while (index < alphaString.length) {
        html += `<button class="keys" id="${alphaString.at(index)}">${alphaString.at(index)}</button>`;
        index ++;
    }
    if (index == alphaString.length) {
        return html;
    }
}
