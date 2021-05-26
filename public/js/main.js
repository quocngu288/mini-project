const handleClickOpenSidebar = () => {
    console.log("cllick")
    document.querySelector('.nav-menu').classList.add("open")
}

const handleClickCloseSidebar = () => {
    document.querySelector('.nav-menu').classList.remove("open")
}

function addClassActive() {
    if (window.innerWidth <= 960) {
        document.querySelector('.nav-menu').classList.add("active")
    } else document.querySelector('.nav-menu').classList.remove("active")
}

addClassActive()
//----------------------------------------------------------------------------------------------------------
var modal = document.getElementById("myModal");

function clickToShowModal(obj) {
    var modalImg = document.getElementById("img01");
    console.log(obj)
    var parentObj = obj.parentNode
    var parentObj1 = parentObj.parentNode.parentNode
    console.log(parentObj1)
    // console.log(parentObj())
    console.log(parentObj1)
    image = parentObj1.children[0]
    modalImg.src = image.src
    modal.style.display = "block";
}

function closeModal() {
    // var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none"
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}


//---------------------------------------------------------------------------------------------------------
btnTop = document.getElementById("btnTotop");
window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

function topFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

//------------------------------------------------------------------------------------------
$('.counter').countUp({
    'time': 2000,
    'delay': 10
});
//---------------------------------------------------------------------------------------------
var owl1 = $('.owl-caro-slider');
var owl2 = $('.owl-caro-feature');
var owl3 = $('.owl-caro-team');
owl1.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
// $
owl2.owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        660: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
owl3.owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        300:{
            items: 1
        },
        500: {
            items: 2
        },
        740: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
//------------------------------------------------------------------------------------------
function filterSelection(c) {
    let x, i;
    let dot = document.getElementsByClassName("navtab--links");
    x = document.getElementsByClassName("tab-content__item");
    if (c == 'all') c = '';
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
    for (let i = 0; i < dot.length; i++) {
        dot[i].addEventListener("click", ()=> {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

filterSelection('all')
