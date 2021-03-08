// https://dev.to/rishavs/making-a-single-page-app-in-ye-good-olde-js-es6-3eng

const routes = {
    '/': () => AboutMe(),
    '/showcase': () => Showcase(),
    '/contact': () => Contact()
}

function router() {

    let r = (window.location.hash.slice(1).toLowerCase() || '/').split("/");
    let request = {
        resource: r[1],
        id: r[2],
        verb: r[3]
    }

    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    let page = routes[parsedURL] ? routes[parsedURL] : ''
    Render('content', page());

    // Mark the current nav link in the header
    document.querySelectorAll('header a').forEach(function(anchor) {
        anchor?.classList.remove('current')
    });
    document.querySelector(`header a[data-path='/${request.resource}']`)?.classList.add('current');

    // Collapse the mobile nav menu
    toggleExpandedMenu(false)
}

window.addEventListener('hashchange',  router);
window.addEventListener('load', router);
