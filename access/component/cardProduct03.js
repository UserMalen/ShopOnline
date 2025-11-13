"use strict";


//====================== card product-03

const imageList = {
    images: [
        {
            id: 1,
            src: "./access/image-product/controller.png"
        },
        {
            id: 2,
            src: "./access/image-product/Headphone-xbox.png"
        },
        {
            id: 3,
            src: "./access/image-product/speaker.png"
        },
        {
            id: 4,
            src: "./access/image-product/system-unit.png"
        },
        {
            id: 5,
            src: "./access/image-product/system-unit.png"
        },
        {
            id: 6,
            src: "./access/image-product/Headphone-xbox.png"
        }
    ]
};

const container = document.querySelector(".container");
imageList.images.forEach((item) => {
    container.innerHTML += `            
            <div class="p-3 md:relative bg-gray-100 md:w-[35em] md:h-55 overflow-hidden flex-shrink-0 md:p-1">
                <span class="md:absolute bg-gray-200 bottom-0 left-[em] w-45 h-50 rounded-tl-[.1em] rounded-tr-[20em] rounded-br-[.2em]">
                    <img src="${item.src}" alt="headphone02" class=" ml-5 md:absolute md:ml-0 left-[2em] top-[4em]" width="100">
                </span>
                <span class="md:absolute left-[9em] top-[3em] w-12 h-12 rounded-full bg-gray-200"></span>
                <span class="md:absolute w-20 h-20 bg-gray-200 rounded-tl-[5em] bottom-0 right-0" dir="ltr"></span>
                <div class="md:absolute right-[5em] top-[3em]">
                    <h2 class="text-lg md:text-[28px] font-bold">Wireless Controller</h2>
                    <p class="text-gray-400 mt-2">strating $90</p>
                    <div class="flex items-center bg-[#536CEC] w-fit px-3 py-2 rounded-3xl mt-4">
                    <button class="text-gray-50 flex text-sm cursor-pointer">Shop now<i class="fa-solid fa-arrow-right ml-1 mt-1.5"></i></button>
                  </div>
                </div>
            </div>`;
});

let currentIndex = 0;
let totalImage = imageList.images.length;

// អនុគមន៍ដើម្បីគណនា scrollAmount តាម responsive
function calculateScrollAmount() {
    const containerWidth = container.offsetWidth;
    const firstItem = container.querySelector('div');

    if (firstItem) {
        const itemWidth = firstItem.offsetWidth;
        const computedStyle = window.getComputedStyle(firstItem);
        const marginRight = parseFloat(computedStyle.marginRight) || 0;

        // គណនាចំនួនធាតុក្នុង ១ អេក្រង់
        const itemsPerScreen = Math.floor(containerWidth / (itemWidth + marginRight));

        // គណនាចម្ងាយដែលត្រូវ scroll
        return itemsPerScreen * (itemWidth + marginRight);
    }

    // Fallback values សម្រាប់ទំហំអេក្រង់ផ្សេងៗ
    if (window.innerWidth >= 768) { // Desktop
        return 1180;
    } else if (window.innerWidth >= 640) { // Tablet
        return 600;
    } else { // Mobile
        return 300;
    }
}

// អនុគមន៍ដើម្បីធ្វើ auto scroll
function autoScroll() {
    const scrollAmount = calculateScrollAmount();
    currentIndex = (currentIndex + 1) % totalImage;
    const positionScroll = currentIndex * scrollAmount;
    container.scrollLeft = positionScroll;
}

// កំណត់ interval
setInterval(autoScroll, 4000);

// ធ្វើឱ្យ responsive នៅពេល resize window
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reset currentIndex និង scroll back to start
        currentIndex = 0;
        container.scrollLeft = 0;
    }, 250);
});