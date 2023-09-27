function getAttributes(){
    const link = document.getElementById('w3r');
    const type = link.getAttribute('type');
    const hreflang = link.getAttribute('hreflang');
    const rel = link.getAttribute('rel');
    const target = link.getAttribute('target');
    const href = link.getAttribute('href');
    // console.log(type);
    // console.log(hreflang);
    // console.log(rel);
    // console.log(target);
    // console.log(href);
    return {
        link: link,
        type: type,
        hreflang: hreflang,
        rel: rel,
        target: target,
        href: href
    }

}