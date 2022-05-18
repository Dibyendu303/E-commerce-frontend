const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
// console.log(menuItems);
// menuItems.forEach((item, index) => {
//     item.addEventListener("click", () => {
//         wrapper.style.transform = `translate(${-100 * index}vw)`;
//     })
// })

const products = [
    {
        id: 1,
        title: "AIR FORCE",
        price: 119,
        colors: [
            {
                code: "black",
                img: "img/air.png"
            },
            {
                code: "darkblue",
                img: "img/air2.png"
            }
        ]
    },
    {
        id: 2,
        title: "AIR JORDAN",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "img/jordan.png"
            },
            {
                code: "green",
                img: "img/jordan2.png"
            }
        ]
    },
    {
        id: 3,
        title: "BLAZER",
        price: 109,
        colors: [
            {
                code: "white",
                img: "img/blazer.png"
            },
            {
                code: "green",
                img: "img/blazer2.png"
            }
        ]
    },
    {
        id: 4,
        title: "CRATER",
        price: 129,
        colors: [
            {
                code: "black",
                img: "img/crater.png"
            },
            {
                code: "lightgray",
                img: "img/crater2.png"
            }
        ]
    },
    {
        id: 5,
        title: "HIPPIE",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "img/hippie.png"
            },
            {
                code: "black",
                img: "img/hippie2.png"
            }
        ]
    }
]

let chosenProduct = products[0];

const currProductImg = document.querySelector(".productImg");
const currProductTitle = document.querySelector(".productTitle");
const currProductPrice = document.querySelector(".productPrice");
const currProductColors = document.querySelectorAll(".color");
const currProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translate(${-100 * index}vw)`;


        // change active status
        let selectedIndex = index;
        menuItems.forEach((item, index) => {
            if (menuItems[index].classList.contains("active")) {
                menuItems[index].classList.remove("active");
            }
            if (index === selectedIndex) {
                menuItems[index].classList.add("active");
            }

        })

        // change the chosen product
        chosenProduct = products[index];

        // change title of current product
        currProductTitle.innerHTML = chosenProduct.title;
        currProductPrice.innerHTML = `$${chosenProduct.price}`;
        currProductImg.src = chosenProduct.colors[0].img;

        // passing new colors
        currProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        })
    })
})

currProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currProductImg.src = chosenProduct.colors[index].img;
    })
})

currProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {

        currProductSizes.forEach((size) => {
            size.style.background = "none";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
})

close.addEventListener("click", () => {
    payment.style.display = "none";
})