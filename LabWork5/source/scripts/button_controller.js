const active = (el) => el == "active"
activate = (id) => Array.from(document.getElementById(id).classList).some(active) ? {}
: document.getElementById(id).classList += " active" 
deactivate = (id) => Array.from(document.getElementById(id).classList).some(active) ? 
document.getElementById(id).classList = `btn btn-secondary`
: {}
const male_active = () => {
    activate("Male1")
    console.log(document.getElementById("Male2"))
    deactivate("Female1")
}
const female_active = () => {
    deactivate("Male1")
    activate("Female1")
}

