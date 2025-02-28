// Підключення з node_modules
import * as noUiSlider from "nouislider";
import wNumb from "wnumb";

// Підключення стилів з scss/base/forms/range.scss
// у файлі scss/forms/forms.scss

function rangeInit() {
	const priceSlider = document.querySelector("#price-slider");
	const priceStartValue = document.getElementById("price-start")?.value;
	const priceEndValue = document.getElementById("price-end")?.value;

	if (priceSlider) {
		let textFrom = priceSlider.getAttribute("data-from");
		let textTo = priceSlider.getAttribute("data-to");
		noUiSlider.create(priceSlider, {
			connect: true,
			start: [Number(priceStartValue), Number(priceEndValue)],
			range: {
				min: [Number(priceStartValue)],
				max: [Number(priceEndValue)]
			},
			tooltips: true,
			format: wNumb({
				decimals: 0,
				prefix: "$"
			})
		});
	}
}

rangeInit();
