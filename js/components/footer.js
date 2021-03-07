

function Footer() {
    return html`
        <div>
            <div id="header_title" >
                <h3>ŽAN PUKMAJSTER</h3>
                <img id="header_navToggler" onclick="toggleExpandedMenu()" src="assets/menu.png" />
            </div>

            <nav>
                ${Link(localize.NAV_ABOUTME, '/')}
                ${Link(localize.NAV_SHOWCASE, '/showcase')}
                ${Link(localize.NAV_CONTACT, '/contact')}
            </nav>
        </div>
    `
}


Render2('footer', Footer());
