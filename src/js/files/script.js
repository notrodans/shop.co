// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const stayUp = document.querySelector(".footer__stay-up");
const page = document.querySelector(".page");

const stayUpHeight = stayUp.clientHeight;

page.style.setProperty("--paddingB", (stayUpHeight / 2 + 80) / 16 + "rem");
//.("--paddingB", )
