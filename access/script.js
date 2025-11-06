        "use strict"
        document.addEventListener("DOMContentLoaded", function(){
            // Desktop dropdown functionality
            const DropdownContainer = document.querySelectorAll(".Dropdow-Container");
            
            // Open dropdown
            function OpenDropdown(dropdown){
                 dropdown.style.opacity = "1";
                 dropdown.style.visibility = "visible";
                 dropdown.style.transform = "translateY(0)";
            };
            
            // Close dropdown
            function CloseDropdown(dropdown){
                 dropdown.style.opacity = "0";
                 dropdown.style.visibility = "hidden";
                 dropdown.style.transform = "translateY(-8px)";
            };

            DropdownContainer.forEach((container)=>{
                const Dropdownbutton = container.querySelector(".Dropdown-button");
                const Dropdownmenu = container.querySelector(".Dropdown-Menu");
                const links = container.querySelectorAll("a");

                container.addEventListener("mouseenter", ()=>{
                    OpenDropdown(Dropdownmenu);
                })
                container.addEventListener("mouseleave", ()=>{
                    CloseDropdown(Dropdownmenu);
                })
                links.forEach((link)=>{
                    link.addEventListener("click", ()=>{
                        CloseDropdown(Dropdownmenu);
                    });
                });
            });

            // Mobile menu functionality
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuClose = document.getElementById('mobile-menu-close');
            const mobileSearchButton = document.getElementById('mobile-search-button');
            const mobileSearch = document.getElementById('mobile-search');
            const mobileDropdownButtons = document.querySelectorAll('.mobile-dropdown-btn');

            // Toggle mobile menu open with animation
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.remove('hidden');
                // Force reflow
                mobileMenu.offsetHeight;
                mobileMenu.classList.remove('-translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                // Close search if open
                closeMobileSearch();
            });

            // Close mobile menu with animation
            function closeMobileMenu() {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('-translate-x-full');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            }

            mobileMenuClose.addEventListener('click', closeMobileMenu);

            // Toggle mobile search with animation
            mobileSearchButton.addEventListener('click', function() {
                if (mobileSearch.classList.contains('hidden')) {
                    openMobileSearch();
                } else {
                    closeMobileSearch();
                }
                // Close menu if open
                closeMobileMenu();
            });

            function openMobileSearch() {
                mobileSearch.classList.remove('hidden');
                // Add animation class
                mobileSearch.classList.add('scale-in');
            }

            function closeMobileSearch() {
                mobileSearch.classList.add('scale-out');
                setTimeout(() => {
                    mobileSearch.classList.add('hidden');
                    mobileSearch.classList.remove('scale-out', 'scale-in');
                }, 200);
            }

            // Mobile dropdown functionality with animation
            mobileDropdownButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    const isHidden = content.classList.contains('hidden');
                    
                    // Close all other dropdowns
                    document.querySelectorAll('.mobile-dropdown-content').forEach(dropdown => {
                        if (dropdown !== content && !dropdown.classList.contains('hidden')) {
                            dropdown.classList.add('scale-out');
                            setTimeout(() => {
                                dropdown.classList.add('hidden');
                                dropdown.classList.remove('scale-out', 'scale-in');
                            }, 200);
                            // Reset icon
                            const otherButton = dropdown.previousElementSibling;
                            const otherIcon = otherButton.querySelector('i');
                            otherIcon.classList.remove('fa-chevron-up');
                            otherIcon.classList.add('fa-chevron-down');
                        }
                    });
                    
                    if (isHidden) {
                        content.classList.remove('hidden');
                        content.classList.add('scale-in');
                    } else {
                        content.classList.add('scale-out');
                        setTimeout(() => {
                            content.classList.add('hidden');
                            content.classList.remove('scale-out', 'scale-in');
                        }, 200);
                    }
                    
                    // Rotate chevron icon
                    const icon = this.querySelector('i');
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                });
            });

            // Close mobile menu when clicking on a link
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    closeMobileMenu();
                });
            });

            // Close search when clicking outside on mobile
            document.addEventListener('click', function(event) {

                if (!mobileSearch.contains(event.target) && !mobileSearchButton.contains(event.target) && !mobileSearch.classList.contains('hidden')) {
                    closeMobileSearch();
                }
            });



            // banner scroll functionality


            const bannerData = {  // កែពី bannerDate ទៅ bannerData
                currentIndex: 0,  // កែពី currenIndex ទៅ currentIndex
                banners: [
                    {
                        id: 1,
                        title: "Xbox Pro✨",
                        subtitle: "Controller",
                        highlight: "Wireless",
                        description: "Revolution Controller with enhanced precision",
                        image: "../image/xbox05.png",
                        color: "bg-primary"  // កែពី bg-blue-500 ទៅ bg-primary
                    },
                    {
                        id: 2,
                        title: "Headphone Pro✨",
                        subtitle: "Audio",
                        highlight: "Premium",
                        description: "Immersive sound experience with noise cancellation",
                        image: "../image/headphone02.png",
                        color: "bg-green-500"  // កែពី bg-green-500 ទៅ bg-secondary
                    }
                ]
            };

            function createBannerHTML(banner, index) {
                return `
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div class="flex flex-col justify-center">
                            <h2 class="text-4xl sm:text-5xl mb-6">${banner.title}</h2>
                            <h2 class="text-4xl sm:text-5xl mb-4">
                                <span class="${banner.color} rounded-xl px-1 text-gray-50">${banner.highlight}</span> ${banner.subtitle}
                            </h2>
                            <p class="mb-2">${banner.description}</p>
                            <section class="${banner.color} ml-1 text-center w-30 hover:bg-secondary transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm mt-2 py-2 rounded-3xl text-gray-50"> <!-- កែពី hover:bg-second ទៅ hover:bg-secondary -->
                                <button>Shop Now <i class="fa-solid fa-store"></i></button>
                            </section>
                        </div>
                        <div class="flex justify-center items-center">
                            <img src="${banner.image}" alt="${banner.title}">
                        </div>
                    </div>
                `;
            }

            function showBanner(index) {
                bannerData.currentIndex = index;  // កែពី bannerDate ទៅ bannerData និង currenIndex ទៅ currentIndex
                const bannerContainer = document.getElementById("banner");
                const bannerWidth = bannerContainer.clientWidth;
                
                bannerContainer.scrollTo({
                    left: index * bannerWidth, 
                    behavior: 'smooth'
                });
            }

            function handleScroll() {
                const bannerContainer = document.getElementById("banner");
                const scrollLeft = bannerContainer.scrollLeft;
                const bannerWidth = bannerContainer.clientWidth;
                const newIndex = Math.round(scrollLeft / bannerWidth);

                if (newIndex !== bannerData.currentIndex) {  // កែពី bannerDate ទៅ bannerData និង currenIndex ទៅ currentIndex
                    bannerData.currentIndex = newIndex;  // កែពី bannerDate ទៅ bannerData និង currenIndex ទៅ currentIndex
                }
            }

            function initBanner() {
                const bannerContainer = document.getElementById("banner");
                
                // កំណត់ style សម្រាប់ horizontal scrolling
                
                let bannersHTML = "";
                bannerData.banners.forEach((banner, index) => {  // កែពី bannerDate ទៅ bannerData
                    bannersHTML += `
                        <div class="flex-shrink-0 w-full snap-center px-4">
                            ${createBannerHTML(banner, index)}
                        </div>
                    `;
                });
                bannerContainer.innerHTML = bannersHTML;

                bannerContainer.addEventListener("scroll", handleScroll);
            }

            // Initialize banner when DOM is loaded
            initBanner();
            // Auto-scroll banners every 6 seconds
            setInterval(() => {
                let nextIndex = (bannerData.currentIndex + 1) % bannerData.banners.length;  // កែពី bannerDate ទៅ bannerData និង currenIndex ទៅ currentIndex
                showBanner(nextIndex);
            }, 6000); // Change banner every 6 seconds
        });