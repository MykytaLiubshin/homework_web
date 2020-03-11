const customElements = [
    ['index.html',           'Index'],
    ['two_d.html',           '2D anim'],
    ['three_d.html',         '3D anim'],
    ['transformation.html',  'Transformations'],
    ['keyframes.html',       'Keyframes'],
    ['combine.html',         'Combinations'],
    ['grid_n_flex.html',     'Grid and Flex'],
]

const listElement = (link, name, active='Table') => name === active
?`<li class="nav-item active"> <a class="nav-link" href="${link}">${name} <span class="sr-only">(current)</span></a></li>`
:`<li class="nav-item"><a class="nav-link" href="${link}">${name}</a></li>`
const handleClick = () => {
    action = document.getElementsByName("action")
    action[0].id = action[0].id === "slider" ?  "navbar_closed" : "slider";
    action[1].id = action[1].id === "slider" ?  "navbar_closed" : "slider";
    action[2].id = action[2].id === "slider" ?  "navbar_closed" : "slider";
};
const NavBar = (cur = table,elements = customElements) =>
{
    return`
    <nav class="cnavbar navbar-expand-lg navbar navbar-dark bg-dark fixed" id="slider">
    <ul class="navbar-nav mr-auto align">
    ${elements.map(el => listElement(el[0],el[1],cur)).filter(el => el !== ",")}
    </ul>
    <button class="btn btn-link" onClick="handleClick()">
    <img src="media/hide.png" width="30px"></img>
    </button>
    </nav>
    </div>`
}

try{document.querySelector('#navbar-index').innerHTML =             NavBar('Index');}catch(error) {}
try{document.querySelector('#navbar-two_d').innerHTML =             NavBar('2D anim');}catch(error) {}
try{document.querySelector('#navbar-three_d').innerHTML =           NavBar('3D anim');}catch(error) {}
try{document.querySelector('#navbar-transformation').innerHTML =    NavBar('Transformations');}catch(error) {}
try{document.querySelector('#navbar-keyframes').innerHTML =         NavBar('Keyframes');}catch(error) {}
try{document.querySelector('#navbar-combine').innerHTML =           NavBar('Combinations');}catch(error) {}
try{document.querySelector('#navbar-grid_n_flex').innerHTML =           NavBar('Grid and Flex');}catch(error) {}
