//All work of tier list addition
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

//All work of image addition
const imagegivenuser = document.querySelector(".img-addition input")
const imageaddbutton = document.querySelector(".new-img")

imageaddbutton.addEventListener('click' , () => {
    if(imagegivenuser.value == ""){
        alert("Enter valid image url")
    }
    addimage(imagegivenuser.value)
})

function addimage(url){
    imagegivenuser.value = ""
    const imagediv = document.createElement('div')
    const newimage = document.createElement("img")
    newimage.setAttribute('draggable' , 'true')
    imagediv.classList.add('realimage')
    newimage.src = url
    imagediv.appendChild(newimage)
    const parentimgsection = document.querySelector(".img-section-main")
    parentimgsection.appendChild(imagediv)
}

//All work of drag event

const allimages = document.getElementsByClassName("realimage")
console.log(allimages)

for(const iterator of allimages){
    setupfordrag(iterator)
}

function setupfordrag(iterator){
    iterator.addEventListener('dragstart' , () => {
        
    })
}
