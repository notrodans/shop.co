/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper";
import { Navigation, Autoplay, Mousewheel, EffectFade, Thumbs, Keyboard } from "swiper/modules";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector(".customers__slider")) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper(".customers__slider", {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Autoplay],
			slidesPerView: 3,
			spaceBetween: 20,
			//centeredSlides: true,
			//autoHeight: true,
			speed: 400,
			initialSlide: 0,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//rewind: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			autoplay: {
				delay: 1000,
				disableOnInteraction: true
			},

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: ".swiper-button-prev",
				nextEl: ".swiper-button-next"
			},
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					autoHeight: true
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
					autoHeight: true
				},
				767.98: {
					slidesPerView: 3,
					spaceBetween: 20,
					autoHeight: true
				}
			},
			// Події
			on: {}
		});
	}

	if (
		document.querySelector(".product-card__thumbnails") &&
		document.querySelector(".product-card__main-image")
	) {
		const thumbs = new Swiper(".product-card__thumbnails", {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			mousewheel: {
				enabled: true
			},
			autoHeight: false,
			slidesPerView: "auto",
			speed: 300,
			breakpoints: {
				320: {
					//slidesPerView: 6,
					spaceBetween: 12,
					slidesPerView: "auto",
					direction: "horizontal"
				},
				767.98: {
					spaceBetween: 12,
					slidesPerView: "auto",
					direction: "horizontal"
				},
				991.98: {
					direction: "vertical",
					spaceBetween: 8,
					slidesPerView: "3"
				}
			}
		});

		new Swiper(".product-card__main-image", {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Thumbs, EffectFade, Keyboard],
			keyboard: {
				enabled: true,
				onlyInViewport: true
			},
			mousewheel: {
				enabled: true
			},
			effect: "fade",
			slidesPerView: 1,
			speed: 300,
			thumbs: {
				swiper: thumbs
			}
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar");
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: "vertical",
				slidesPerView: "auto",
				freeMode: {
					enabled: true
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true
				}
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});
