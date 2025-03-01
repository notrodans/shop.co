import * as noUiSlider from "nouislider";

function rangeInit() {
	const priceSlider = document.querySelector("#price-slider");

	if (priceSlider) {
		let priceStartValue = priceSlider.getAttribute("data-from");
		let priceEndValue = priceSlider.getAttribute("data-to");
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

	const priceStart = document.getElementById("price-start");
	const priceEnd = document.getElementById("price-end");
	if (priceStart && priceEnd) {
		priceSlider.noUiSlider.on("set.one", function (valuesArray) {
			priceStart.value = valuesArray[0].replace(/\$/g, "");
			priceEnd.value = valuesArray[1].replace(/\$/g, "");
		});
	}
}

rangeInit();
