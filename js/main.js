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
    // flatpickr(".date-input", {
    //     'inline' : true,
    //     locale: "ru",
    //     dateFormat: "d.m.Y",
    //     disableMobile: true,
    //     onReady: function (selectedDates, dateStr, instance) {
    //         const calendarContainer = instance.calendarContainer;
    //         const monthYearElements = calendarContainer.querySelectorAll(".flatpickr-monthDropdown-months, .numInputWrapper");

    //         monthYearElements.forEach(element => {
    //             const input = element.querySelector("input");
    //             if (input) {
    //                 input.setAttribute("readonly", true);
    //             }
    //         });
    //     }
    // });
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
        locationEl.classList.add('active');
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
})