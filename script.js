const MAX_IMAGES_PER_TIER = 5; // Set the maximum number of images per tier

// Function to add a new image
function addimage(url) {
    imagegivenuser.value = "";
    const imagediv = document.createElement('div');
    const newimage = document.createElement("img");
    newimage.setAttribute('draggable', 'true');
    imagediv.classList.add('realimage');
    newimage.src = url;
    imagediv.appendChild(newimage);
    const parentimgsection = document.querySelector(".img-section-main");
    parentimgsection.appendChild(imagediv);
    setupfordrag(imagediv);
}

// All work of drag event
let currdragitem;
function setupfordrag(iterator) {
    iterator.addEventListener('dragstart', (event) => {
        const parentTier = event.target.closest('.Tier-img'); // Changed from '.tier' to '.Tier-img'
        if (parentTier && parentTier.children.length >= MAX_IMAGES_PER_TIER) {
            event.preventDefault(); // Prevent dragging if tier is full
            alert("Tier is full. Cannot drag this image.");
            return;
        }
        currdragitem = event.target.parentNode;
    });

    iterator.addEventListener('dblclick', (event) => {
        const parent = event.target.parentNode;
        const nontiersection = document.querySelector(".img-section-main");
        nontiersection.appendChild(parent);
    });
}

// Function to set up drop zone
function setupdropzone(imgdropsection) {
    imgdropsection.addEventListener('drop', (event) => {
        event.preventDefault();
        const parentTier = event.target.closest('.Tier-img'); // Changed from '.tier' to '.Tier-img'
        if (parentTier && parentTier.children.length >= MAX_IMAGES_PER_TIER) {
            alert("Tier is full. Cannot drop this image.");
            return;
        }
        event.target.appendChild(currdragitem);
    });

    imgdropsection.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
}

// Function to create a new tier
function tiercreation() {
    const newtierlist = document.createElement('div');
    newtierlist.classList.add('Tiers');
    const tierparent = document.querySelector(".Tier-section");

    tierparent.appendChild(newtierlist);
    const tiername = document.createElement('div');
    tiername.classList.add("Tier-name");
    let random = addrandomcolor();
    tiername.style.backgroundColor = random;

    const delbtn = document.createElement('div');
    delbtn.classList.add('deltier');
    delbtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    const tierimage = document.createElement('div');
    tierimage.classList.add('Tier-img');

    newtierlist.appendChild(tiername);
    newtierlist.appendChild(tierimage);
    newtierlist.appendChild(delbtn);

    const name = document.createElement('p');
    name.classList.add("Tier-name-user");
    tiername.appendChild(name);
    name.textContent = usergiventiername.value;
    usergiventiername.value = "";
    delbtn.addEventListener('click', () => {
        newtierlist.style.display = "none";
    });
    setupdropzone(tierimage);
}

// Random color feature
function addrandomcolor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// All work of tier list addition
const usergiventiername = document.getElementById("userinput-tier");
const tieraddbutton = document.getElementById("tier-add-button");

tieraddbutton.addEventListener('click', (e) => {
    if (usergiventiername.value == "") {
        alert("Enter valid name");
        return;
    }
    tiercreation();
});

// All work of image addition
const imagegivenuser = document.querySelector(".img-addition input");
const imageaddbutton = document.querySelector(".new-img");

imageaddbutton.addEventListener('click', () => {
    if (imagegivenuser.value == "") {
        alert("Enter valid image url");
    } else {
        addimage(imagegivenuser.value);
    }
});

// Example usage: Call setupdropzone on each drop zone
const dropzones = document.querySelectorAll('.dropzone'); // Assuming each drop zone has a class 'dropzone'
dropzones.forEach(setupdropzone);
