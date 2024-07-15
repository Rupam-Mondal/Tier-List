const usergiventiername = document.getElementById("userinput-tier")

const tieraddbutton = document.getElementById("tier-add-button")


tieraddbutton.addEventListener('click' , (e) => {
    if(usergiventiername.value == ""){
        alert("Enter valid name")
        return
    }
    tiercreation()
})

function tiercreation(){
    const newtierlist = document.createElement('div')
    newtierlist.classList.add('Tiers')

    console.log(newtierlist);

    const tierparent = document.querySelector(".Tier-section")

    tierparent.appendChild(newtierlist)
    const tiername = document.createElement('div')
    tiername.classList.add("Tier-name")

    const tierimage = document.createElement('div')
    tierimage.classList.add('Tier-img')

    newtierlist.appendChild(tiername)
    newtierlist.appendChild(tierimage)

    const name = document.createElement('p')
    name.classList.add("Tier-name-user")
    tiername.appendChild(name)
    name.textContent = usergiventiername.value
    usergiventiername.value = ""
}
