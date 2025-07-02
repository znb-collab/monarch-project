// Inject header
fetch('../sharedcomponents/header/header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        const cssId = 'header-style';

        if (!document.getElementById(cssId)) {
            const link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.href = '../sharedcomponents/header/header.css';
            document.head.appendChild(link);
        }

        // Attach click event listeners after header is loaded
        document.querySelectorAll('a[data-page]').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const page = this.getAttribute('data-page');
                console.log(
                    page
                )
                loadPageContent(page);
            });
        });
    });


function loadPageContent(page) {
    const path = `../${page}/${page}.html`; // Example: ../about/about.html

    fetch(path)
        .then(res => res.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;

            // Inject CSS if not already added
            const cssId = `${page}-css`;
            if (!document.getElementById(cssId)) {
                const link = document.createElement('link');
                link.id = cssId;
                link.rel = 'stylesheet';
                link.href = `../${page}/${page}.css`; // Example: ../about/about.css
                document.head.appendChild(link);
            }
        })
        .catch(err => {
            document.getElementById('main-content').innerHTML = '<p>Page not found</p>';
            console.error('Page load failed:', err);
        });
}







// Inject footer
fetch('../sharedcomponents/footer/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        const cssId = 'footer-style';
        if (!document.getElementById(cssId)) {
            const link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.href = '../sharedcomponents/footer/footer.css';
            document.head.appendChild(link);
        }
    });