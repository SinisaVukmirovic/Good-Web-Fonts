const fontFamilies = [
    {
        name: `Titillium Web`,
        visit: `https://fonts.google.com/specimen/Titillium+Web`,
        link: `<link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap" rel="stylesheet">`,
        import: `@import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap');`,
        family: `font-family: 'Titillium Web', sans-serif;`
    },
    {
        name: `Poppins`,
        visit: `https://fonts.google.com/specimen/Poppins`,
        link: `<link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet">`,
        import: `@import url('https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap');`,
        family: `font-family: 'Poppins', sans-serif;`
    },
    {
        name: `Squada One`,
        visit: `https://fonts.google.com/specimen/Squada+One`,
        link: `<link href="https://fonts.googleapis.com/css?family=Squada+One&display=swap" rel="stylesheet">`,
        import: `@import url('https://fonts.googleapis.com/css?family=Squada+One&display=swap');`,
        family: `font-family: 'Squada One', cursive;`
    },
    {
        name: `Gruppo`,
        visit: `https://fonts.google.com/specimen/Gruppo`,
        link: `<link href="https://fonts.googleapis.com/css?family=Squada+One&display=swap" rel="stylesheet">`,
        import: `@import url('https://fonts.googleapis.com/css?family=Squada+One&display=swap');`,
        family: `font-family: 'Gruppo', cursive;`
    },
    {
        name: `Muli`,
        visit: `https://fonts.google.com/specimen/Muli`,
        link: `<link href="https://fonts.googleapis.com/css?family=Gruppo&display=swap" rel="stylesheet">`,
        import: `@import url('https://fonts.googleapis.com/css?family=Gruppo&display=swap');`,
        family: `font-family: 'Muli', sans-serif;`
    },
];

const htmlHead = document.querySelector('head');

const container = document.querySelector('.container');

const exampleElems = `
    <p class="size-175">Lorem ipsum dolor sit amet. | 123 456-789 | ! ?</p>
    <p class="size-15">Lorem ipsum dolor sit amet. | 123 456-789 | ! ?</p>
    <p class="size-125">Lorem ipsum dolor sit amet. | 123 456-789 | ! ?</p>
    <p>Lorem ipsum dolor sit amet. | 123 456-789 | ! ?</p>
`;


fontFamilies.forEach(font => {

    const newFontLink = `${font.link}`;

    let fontFamilyTab = `
        <div class="font-fam" style="${font.family}">
            <div class="name-link">
                <h2>${font.name}</h2>
                <a href="${font.visit}" target="_blank">
                    <i class="fas fa-arrow-alt-circle-right"></i>
                </a>
            </div>
        `;
        
        fontFamilyTab += exampleElems;

        fontFamilyTab += `
            <div class="css-import">
                <h4>CSS Import and font-family:</h4>
                <h5>${font.import}</h5>
                <h5>${font.family}</h5>
                <span class="copy-btn" onclick="copyToClipboard(this)">Copy</span>
            </div>
        </div>
    `;

    htmlHead.insertAdjacentHTML('beforeend', newFontLink);

    container.insertAdjacentHTML('beforeend', fontFamilyTab);

});

function copyToClipboard(copy) {
    const importLinksElem = copy.parentElement;
    
    const importLinks = importLinksElem.querySelectorAll('h5');

    let links = '';

    importLinks.forEach(link => {
        return links += link.textContent;   
    });

    navigator.clipboard.writeText(links).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}
