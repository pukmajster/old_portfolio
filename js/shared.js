function Render(id, html) {
    let root = document.querySelector(`jacket#${id}`);
    
    if( root ) {
        root.innerHTML = html;
    }
}

function Render2(elem, html) {
    let root = document.querySelector(elem);
    
    if( root ) {
        root.innerHTML = html;
    }
}

// html() is a template literal tag. It simply returns the given string.
// You can use it alongside 'lit-html' for html syntaxing in .js files.
const html = (strings, ...values) => {
    let str = '';
    strings.forEach((string, i) => {
        str += string + (values[i] || '');
    });
    return str;
}
