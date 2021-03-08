function Render(id, htmlText) {
    let root = document.querySelector(`jacket#${id}`);
    
    if( root ) {
        root.innerHTML = htmlText;
    }
}

function Render2(elem, htmlText) {
    let root = document.querySelector(elem);
    
    if( root ) {
        root.innerHTML = htmlText;
    }
}

// html() is a template literal tag. It simply returns the given string.
// You can use it alongside 'lit-html' for html syntaxing in .js files.
function html(strings, ...values) {
    let str = '';
    strings.forEach((string, i) => {
        str += string + (values[i] || '');
    });
    return str;
}
