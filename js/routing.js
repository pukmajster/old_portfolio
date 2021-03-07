const routes = {
    '/': () => AboutMe(),
    '/showcase': () => Showcase(),
    '/contact': () => Contact()
}


// TODO: Add proper routing ?

function redirect(path, noPush = false) {

    // Check if the path is valid.
    // if (!(path in routes)) {
    //     redirect('/')
    //     return;
    // }

    let newUrl = window.location.origin + path;

    // Don't redirect if we're already on the same page
    // if(newUrl === window.location.href) {
    //     return;
    // }


    // !noPush && window.history.pushState({}, path, window.location.origin + path);
    Render('content', routes[path]());

    document.querySelectorAll('header a').forEach(anchor => anchor?.classList.remove('current'));
    document.querySelector(`header a[data-path='${path}']`)?.classList.add('current');
}


// window.onpopstate = () => {
//     Render('content', routes[window.location.pathname]());
// }


// window.addEventListener('hashchange', function(){
//     let hash = `/${window.location.hash}`;
//     if( hash in routes) {
//         redirect(hash, true)
//     }
//     else redirect('/', true)
// })


window.onload = () => {
    // let hash = window.location.hash;

    // if(hash) {
    //     redirect(`/${hash}`, true);
    // } else {
    //     redirect(`/`, true);
    // }


    redirect(`/`, true);
};