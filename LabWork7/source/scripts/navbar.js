const ids = [
    "nav_one",
    "nav_two"
]

const get_navbar = ( active ) => `
<nav id="navbar_rock" class="navbar navbar_rock ${ active==1 ? "leftie" : "rightie" }">
      <nav class="nav nav-pills flex-column">
        <a class="nav-link ${ active==1 ? "activ"  : "" }" href="#top">1</a>
        <a class="nav-link " href="#about_us">2</a>
        <a class="nav-link ${ active==3 ? "activ"  : "" }" href="#our_new_vid">3</a>
        <a class="nav-link " href="#bottom">4</a>
      </nav>
    </nav>
` 

const set_nav = (active, id) => {
    try{document.querySelector('#'+id).innerHTML = get_navbar(active+1);}catch(error) {}
}
set_nav( 0, ids[0] )
set_nav( 2, ids[1] )

const show = () => console.log("Showin it")