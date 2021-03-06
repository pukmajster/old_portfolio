

function Header() {
    return html`
        <header>
            <div id="header_title" >
                <h3>ŽAN PUKMAJSTER</h3>
                <img id="header_navToggler" onclick="toggleExpandedMenu()" src="assets/menu.png" />
            </div>

            <nav>
                ${Link(localize.NAV_ABOUTME, '/')}
                ${Link(localize.NAV_SHOWCASE, '/showcase')}
                ${Link(localize.NAV_CONTACT, '/contact')}
            </nav>
        </header>
    `
}

function toggleExpandedMenu(flag = null) {
    let nav = document.querySelector('nav');
    
    flag === null
    ?
    nav.classList.toggle('--expanded')
    :
    nav.classList.toggle('--expanded', flag)
}

function Link(label, path) {
    return html`
        <a data-path="${path}" href="#" onclick="redirect('${path}'); toggleExpandedMenu(false); return false; " >${label}</a>
    `
}

Render('header', Header());
