import templateHtml from "./component1.html?raw";

const template = document.createElement("template");
template.innerHTML = templateHtml;

const TAG_NAME = "component-1";

if (!customElements.get(TAG_NAME)) {
  customElements.define(
    TAG_NAME,
    class extends HTMLElement {
      constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));
      }
    },
  );
}
