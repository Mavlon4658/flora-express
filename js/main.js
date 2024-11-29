const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

document.addEventListener("DOMContentLoaded", function () {
    const datePicker = document.querySelectorAll('.date-picker');

    if ( datePicker.length ) {
        datePicker.forEach(el => {
            const inp = el.querySelector('.date-input');
            const pickerEl = el.querySelector('.flatpickr');
            flatpickr(pickerEl, {
                locale: 'ru',
                dateFormat: '\\Da\\y picke\\d: Y/m/d'
            });

        })
    }
});

const modalClasses = ['.login-modal'];

if (modalClasses.length) {
    modalClasses.forEach(cls => {
        const modal = document.querySelector(cls);
        const modalClose = document.querySelector(`${cls} .modal__close`);
        const modalBg = document.querySelector(`${cls} .modal__bg`);
        const modalOpen = document.querySelectorAll(cls + '__open');

        if (modalOpen.length) {
            modalOpen.forEach(el => {
                el.onclick = e => {
                    e.preventDefault();
                    modal.classList.add('active');
                    bodyHidden();
                }
            })

            modalClose.onclick = () => {
                modal.classList.remove('active');
                bodyVisible();
            }

            modalBg.onclick = () => {
                modal.classList.remove('active');
                bodyVisible();
            }
        }
    })
}

let langItem = document.querySelectorAll('.select_lang__list li');
let langBtn = document.querySelector('.select_lang__btn');

langItem.forEach(el => {
    el.onclick = () => {
        langBtn.querySelector('input').value = el.querySelector('p').textContent;
        langBtn.querySelector('img').setAttribute('src', el.querySelector('img').getAttribute('src'));
    }
})

let currencyItem = document.querySelectorAll('.select_currency__list li');
let currencyInp = document.querySelector('.select_currency__btn input');

if (currencyItem.length) {
    currencyItem.forEach(el => {
        el.onclick = () => {
            currencyInp.value = el.getAttribute('data-currency');
            currencyItem.forEach(item => {
                if (item == el) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })
        }
    })
}

const formSelect = document.querySelectorAll('.form_select');

if (formSelect.length) {
    formSelect.forEach(el => {
        const btn = el.querySelector('.form_select__btn');
        const inp = el.querySelector('.form_select__btn input');
        const list = el.querySelectorAll('.form_select__list li');

        btn.onclick = () => {
            el.classList.toggle('active');
        }
        
        if (list.length) {
            list.forEach(item => {
                item.onclick = () => {
                    inp.value = item.textContent;
                    el.classList.remove('active');
                    list.forEach(a => {
                        if (a == item) {
                            a.classList.add('selected');
                        } else {
                            a.classList.remove('selected');
                        }
                    })
                }
            })
        }
    })
}

let locationEl = document.querySelector('.header__location');
let locationClose = document.querySelector('.header__location .close_btn');
let locationBtn = document.querySelector('.header__location_inp');
let locationContent = document.querySelector('.header__location_content');

if (locationBtn) {
    locationBtn.onclick = () => {
        locationEl.classList.toggle('active');
    }
    
    locationClose.onclick = () => {
        locationEl.classList.remove('active');
    }
}

const homeSwp = new Swiper('.home__swp .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.home__swp .swp_btn__next',
        prevEl: '.home__swp .swp_btn__prev',
    },
    pagination: {
        el: '.home__swp .swp_pagination',
        clickable: true,
    }
})

const cards = document.querySelectorAll('.card');

if (cards.length) {
    cards.forEach(el => {
        const swp = new Swiper(el.querySelector('.swiper'), {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            navigation: {
                nextEl: el.querySelector('.swp_btn__next'),
                prevEl: el.querySelector('.swp_btn__prev'),
            },
            pagination: {
                el: el.querySelector('.swp_pagination'),
                clickable: true,
            }
        })
    })
}

const likeBtn = document.querySelectorAll('.like-btn');
if (likeBtn.length) {
    likeBtn.forEach(el => {
        el.onclick = () => {
            el.classList.toggle('active');
        }
    })
}

const reviewSwp = new Swiper('.reviews .swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.reviews .swp_btn__next',
        prevEl: '.reviews .swp_btn__prev',
    },
    pagination: {
        el: '.reviews .swp_pagination',
        clickable: true
    }
})

const rangesEl = document.querySelectorAll(".form_range");

if (rangesEl.length) {
    rangesEl.forEach(range => {
        let rangeS = range.querySelectorAll("input[type=range]"),
            numberS = range.querySelectorAll(".val"),
            line = range.querySelector('.line'),
            min = rangeS[0].min,
            max = rangeS[0].max;

        const handleRange = () => {
            let slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);
        
            if (slide1 > slide2) [slide1, slide2] = [slide2, slide1];
        
            numberS[0].textContent = slide1;
            numberS[1].textContent = slide2;

            line.style.left = 100 * slide1 / max + '%';
            line.style.width = 100 * (slide2 - slide1) / max + '%';
        }

        handleRange();

        rangeS.forEach(function(el) {
            el.oninput = function() {
                handleRange();
            }
        });
    })
}

const navsContent = document.querySelectorAll('.navs-mb__content_item');

if (navsContent.length) {
    navsContent.forEach(el => {
        let btn = el.querySelector('.navs-mb__content_btn'),
            content = el.querySelector('.navs-mb__list');

        if (content) {
            btn.onclick = () => {
                navsContent.forEach(a => {
                    if (a === el) {
                        a.classList.toggle('active');
                    } else {
                        a.classList.remove('active');
                    }
                })
            }
        }
    })
}

const filterModal = document.querySelector('section.filter');
const filterModalOpen = document.querySelectorAll('.filter-modal__open');
const filterModalClose = document.querySelector('.filter__close');

if (filterModalOpen.length) {
    filterModalOpen.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            filterModal.classList.add('active');
            bodyHidden();
        }
    })
    filterModalClose.onclick = () => {
        filterModal.classList.remove('active');
        bodyVisible();
    }
}

const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOpen = document.querySelector('.mobile-menu__open');
const mobileMenuClose = document.querySelector('.mobile-menu__close');
const mobileMenuBg = document.querySelector('.mobile-menu__bg');

mobileMenuOpen.onclick = e => {
    e.preventDefault();
    mobileMenu.classList.add('active');
    bodyHidden();
}

mobileMenuClose.onclick = () => {
    mobileMenu.classList.remove('active');
    bodyVisible();
}

mobileMenuBg.onclick = () => {
    mobileMenu.classList.remove('active');
    bodyVisible();
}

const menuNavsBtn = document.querySelectorAll('.moible-menu__navs_btn');
const menuNavsContent = document.querySelectorAll('.mobile-menu__navs_content');

if (menuNavsBtn.length) {
    menuNavsBtn.forEach(el => {
        const dataNavsItem = el.getAttribute('data-navs');
        el.onclick = () => {
            menuNavsContent.forEach(content => {
                if (dataNavsItem == content.getAttribute('data-navs-item')) {
                    content.classList.add('active');
                }
            })
        }
    })

    menuNavsContent.forEach(el => {
        const btn = el.querySelector('.back-btn');
        if (btn) {
            btn.onclick = () => {
                el.classList.remove('active');
            }
        }
    })
}

document.addEventListener('click', event => {
    if (formSelect.length) {
        formSelect.forEach(el => {
            if (!el.contains(event.target)) {
                el.classList.remove('active');
            }
        })
    }

    if (locationEl && !locationEl.contains(event.target)) {
        locationEl.classList.remove('active');
    }

    if (navsContent.length) {
        navsContent.forEach(el => {
            if (!el.contains(event.target)) {
                el.classList.remove('active');
            }
        })
    }
})