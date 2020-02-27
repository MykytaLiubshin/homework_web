foot_pics = [
    ["https://github.com/MykytaLiubshin",`gh_logo.png`],
    ["https://gitlab.com/enotich13",`gl_logo.png`],
    ["https://www.instagram.com/herrgott_fox/",`ins_logo.jpg`],
    ["https://t.me/the_doom_guy",`tg_logo.png`],
]

const foot_pic = (link, img) => `
<a href="${link}">
<img src="media/logos/${img}" height="30" width="30">
</a>`

const footer = (feet = foot_pics) => `
<footer>
        <div class="footer-copyright text-center py-3">© 2077 Copyright 
        ${feet.map(foot => foot_pic(foot[0],foot[1])).join('')}
        </div>
    </footer>
        `
document.querySelector('#footer').innerHTML = footer()
