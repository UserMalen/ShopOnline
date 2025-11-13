const productList = [
    {
        Id: 1,
        src: "./access/image-product/controller.png",
        alt: "controller",
        product: "+90 Product"
    },
    {
        Id: 2,
        src: "./access/image-product/desktop.png",
        alt: "desktop",
        product: "+60 Product"
    },
    {
        Id: 3,
        src: "./access/image-product/Headphone-xbox.png",
        alt: "Headphone-xbox",
        product: "+23 Product"
    },
    {
        Id: 4,
        src: "./access/image-product/heapphones.png",
        alt: "heapphones",
        product: "+31 Product"
    },
    {
        Id: 5,
        src: "./access/image-product/Macbookair-M3-1.png",
        alt: "Macbookair-M3-1",
        product: "+25 Product"
    },
    {
        Id: 6,
        src: "./access/image-product/speaker.png",
        alt: "speaker",
        product: "+12 Product"
    },
    {
        Id: 7,
        src: "./access/image-product/system-unit.png",
        alt: "system-unit",
        product: "+9 Product"
    },
    {
        Id: 8,
        src: "./access/image-product/vr.png",
        alt: "vr",
        product: "+2 Product"
    },
];

const containCard = document.querySelector(".contain-card");
productList.forEach((item) => {
    containCard.innerHTML += `
        <div class=" border-1 border-gray-100 flex-shrink-0 p-1 w-40 rounded-sm shadow-sm text-center hover:scale-110 transition duration-300 ease-in-out">
            <img src="${item.src}" alt="${item.alt}">
            <div class="flex justify-center mt-2">
                <div class="w-25 text-gray-50 mb-4 bg-[#536CEC] p-1 rounded-sm cursor-pointer">${item.product}</div>
            </div>
        </div>    
    `;
});

// ផ្លាស់ប្តូរឈ្មោះអថេរដើម្បីជៀសវាងជំលោះ
let cardScrollSpeed = 2;
let cardScrollDirection = 1;

function autoScrollCards() {
    containCard.scrollLeft += cardScrollSpeed * cardScrollDirection;
    if (containCard.scrollLeft >= containCard.scrollWidth - containCard.clientWidth - 10) {
        cardScrollDirection = -1;
    };
    if (containCard.scrollLeft <= 10) {
        cardScrollDirection = 1;
    };

    requestAnimationFrame(autoScrollCards);
};
autoScrollCards();

containCard.addEventListener("mouseenter", () => {
    cardScrollSpeed = 0;
});
containCard.addEventListener("mouseleave", () => {
    cardScrollSpeed = 2;
});