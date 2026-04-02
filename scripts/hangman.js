export {Hangman};

class Hangman{

        constructor (word) {
        let html = '';
        let index = 0;
        this.word = word;
        html += '<div id="hangmanBox">'
        while (index < word.length) {
            html += `<p class="hangmanLetter">_</p>`;
            index ++;
        }
        html += '</div>'
        this.html = html;
    }

    returnhtml() {
        return this.html;
    }

    updateHangman (letters) {
        let index = 0;
        let html = '';
        this.html = '';
        html += '<div id="hangmanBox">';
        while (index < letters.length) {
            if (this.word.includes(letters[index])) {
                let innerIndex = 0;
                while (innerIndex < this.word.length) {
                    if (letters[index] == this.word[innerIndex]){
                        html += `<p class="hangmanLetter">${letters[index]}</p>`;
                    }
                    else {
                        html += `<p class="hangmanLetter">_</p>`;
                    }
                innerIndex ++;
            html += `<p class="hangmanLetter">_</p>`;
            }
            html += '</div>'
            this.html = html;
            }
        index ++;
        }
    }
}