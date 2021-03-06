const routes = {
    '/': () => AboutMe(),
    '/showcase': () => Showcase(),
    '/contact': () => Contact()
}

const cached_renders = {};





function redirect(path) {

    // Check if the path is valid.
    // if (!(path in myObj)) {
    //     return;
    // }

    // window.history.pushState({}, path, window.location.origin + path);
    let content;
    Render('content', routes[path]());

    document.querySelectorAll('header a').forEach(anchor => anchor?.classList.remove('current'));
    document.querySelector(`header a[data-path='${path}']`)?.classList.add('current');
}


window.onpopstate = () => {
    Render('content', routes[window.location.pathname]());
}

window.onload = () => redirect('/');