import Component from "@glimmer/component";

export default class CustomVsatSearchInitialOptions extends Component {
  constructor() {
    super();
    console.log("Hello, world");
    const el = document.querySelector("#custom-vsat-init-options");
    const labelEl = el.querySelector("span.label-suffix");
    labelEl.innerText = "in Viasat Help Articles";
    el.addEventListener("click", () => {
      const query = el.querySelector("span.search-item-prefix").innerText;
      location.href = `https://www.forum.test.viasat.com/docs?search=${query}&tag=article`;
    });
  }
}
