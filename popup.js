document.addEventListener('DOMContentLoaded', async () => {

    const linksList = document.getElementById('linksList');
    const urls = [
        {
            "name": "Pluralsight",
            "link": "http://pluralsight.com"
        },
        {
            "name": "Google",
            "link": "http://google.com"
        }];

    try {
        const link = urls.map(l => {
            return `<li class="links">
               <a class="btn" href="${l.link}" ref="noopener noreferrer" target="_blank">${l.name}</a>`

        }).join('');
        linksList.innerHTML = link;
    } catch (err) {
        console.error(err);
    }

});