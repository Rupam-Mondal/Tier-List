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
    const tierparent = document.querySelector(".Tier-section")

    tierparent.appendChild(newtierlist)
    const tiername = document.createElement('div')
    tiername.classList.add("Tier-name")
    let random = addrandomcolor()
    tiername.style.backgroundColor = random

    const delbtn = document.createElement('div')
    delbtn.classList.add('deltier')
    delbtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    const tierimage = document.createElement('div')
    tierimage.classList.add('Tier-img')

    newtierlist.appendChild(tiername)
    newtierlist.appendChild(tierimage)
    newtierlist.appendChild(delbtn)

    const name = document.createElement('p')
    name.classList.add("Tier-name-user")
    tiername.appendChild(name)
    name.textContent = usergiventiername.value
    usergiventiername.value = ""
    delbtn.addEventListener('click' , () => {
        newtierlist.style.display = "none"
    })
    setupdropzone(tierimage)
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
    setupfordrag(imagediv)
}

//All work of drag event

// const allimagesdiv = document.getElementsByClassName("realimage")


// for(const iterator of allimagesdiv){
//     setupfordrag(iterator)
// }

let currdragitem;
function setupfordrag(iterator){
    iterator.addEventListener('dragstart' , (event) => {
        currdragitem = event.target.parentNode
    })

    iterator.addEventListener('dblclick' , (event) => {
        const parent = event.target.parentNode
        const nontiersection = document.querySelector(".img-section-main")
        nontiersection.appendChild(parent)
    })
}

//Inside tier list

function setupdropzone(imgdropsection){
    imgdropsection.addEventListener('drop' , (event) => {
        event.preventDefault()
    })

    imgdropsection.addEventListener('dragover' , (event) => {
        console.log("Done")
        event.target.appendChild(currdragitem)
    })
}

//Random color feature
function addrandomcolor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}