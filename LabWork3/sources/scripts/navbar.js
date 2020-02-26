const customElements = [
    ['table.html', 'Table'],
    ['audio.html', 'Audio'],
    ['video.htm', 'Video'],
]

const listElement = (link, name) => `<li class="nav-item"><a class="nav-link" href="${link}">${name}</a></li>`
const NavBar = (elements = customElements) =>
    `<nav class="cnavbar navbar-expand-lg navbar navbar-dark bg-dark">
    <ul class="navbar-nav mr-auto align">
    <li class="nav-item active">
      <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
    </li>
    ${elements.map(el => listElement(el[0],el[1])).filter(el => el !== ",")}
    </ul>
    </nav>`
document.querySelector('#navbar').innerHTML = NavBar();

