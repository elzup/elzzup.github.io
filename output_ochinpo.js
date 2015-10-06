var word = 'OCNP';
var checker = '.'.repeat(word.length);
var text = '';
for (var i = 0; i < 1000; i++) {
    var ch = word.charAt(Math.floor(Math.random() * word.length));
    text = text + '&nbsp;' + ch;
    checker = checker.substr(1) + ch;
    console.log(checker);
    setTimeout("document.getElementById('ochinpo').innerHTML = '" + text + "'", 100 * i);
    if (checker == word) {
        text = text + "<br>[" + i + "]";
        setTimeout("document.getElementById('ochinpo').innerHTML = '" + text + "'", 100 * i);
        break;
    }
}

