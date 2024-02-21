import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class CustomVsatSearchInitialOptions extends Component {
  constructor() {
    super();
    console.log("HHHHHHHHHHHHHEy");
    const inputSearch = document.querySelector("#search-term");
    console.log({ inputSearch });
    inputSearch.addEventListener("change", (e) => {
      console.log({ e });
      console.log(e.target.value);
      const el = document.querySelector("#custom-vsat-init-options");
      console.log({ el });
      const labelEl = el?.querySelector("span.label-suffix");
      console.log({ labelEl });
      if (labelEl) labelEl.innerText = "in Viasat Help Articles";
      el?.addEventListener("click", (e) => {
        console.log({ e });
        const query = el?.querySelector("span.search-item-prefix").innerText;
        console.log({ query });
        location.href = `https://www.forum.test.viasat.com/docs?search=${query}&tag=article`;
      });
    });
  }

  @action
  onClick() {
    console.log("BOOM");
  }
}
