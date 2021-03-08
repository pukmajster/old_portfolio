

function Header() {
    return html`
        <header>
            <div id="header_title" >
                <h3>ŽAN PUKMAJSTER</h3>
                <img id="header_navToggler" onclick="toggleExpandedMenu()" src="assets/menu.png" />
            </div>

            <nav>
                ${Link(localize.NAV_ABOUTME, '/', '/#')}
                ${Link(localize.NAV_SHOWCASE, '/showcase', '/#/showcase' )}
                ${Link(localize.NAV_CONTACT,  '/contact', '/#/contact' )}
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

function Link(label, id, path) {
    return html`
        <a data-path="${id}" href="${path}" style="cursor: pointer" >${label}</a>
    `
}

Render('header', Header());
