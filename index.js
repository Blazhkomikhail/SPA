function render(pageName) {
    let content =  document.querySelector('#' + pageName).innerHTML;
    document.querySelector('#root').innerHTML = content;
}

function routing() {
    let url = new URL(location.href);
    let params = url.searchParams;
    let pageName = params.get('page');
    if (!pageName) pageName = 'home';
    //if page is wrong
    render(pageName);
}

window.addEventListener('popstate', function (){
    routing();
})

window.addEventListener('DOMContentLoaded', function () {
    routing();
})

document.querySelector('.menu').addEventListener('click', function(){
  if (event.target.tagName === 'A') {
            // Data 640K
            let state = {};
            // Firefox currently ignores this parameter
            let title = '';

            history.pushState(state, title, event.target.href);
            routing();
            // It stops the browsers default behaviour.
            event.preventDefault();
            // It prevents the event from propagating (or “bubbling up”)
            event.stopPropagation();
        }
})


/* IE11 not:
location.href:
location.protocol
location.host
location.pathName
location.search
location.hash*/