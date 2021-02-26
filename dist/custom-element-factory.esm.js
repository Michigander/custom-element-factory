import { html } from 'lit-html';
import { kebabCase } from 'lodash';

/**
 * Transforms a function into a custom element registered on the page.
 * @param wrappedComponent
 */
function makeElement (elementLiteral) {
    console.log(elementLiteral);
    const observedCallback = new Proxy(elementLiteral, {
        apply: function (target, thisArg, argumentsList) {
            target.apply(thisArg, argumentsList);
        },
    });
    observedCallback();
    class CustomElementClass extends HTMLElement {
        static get observedAttributes() {
            return ["title"];
        }
        constructor() {
            super();
            this.attachShadow({ mode: "open" });
        }
        connectedCallback() {
            console.log("connected");
        }
        attributeChangedCallback(name) {
            console.log("attribute-changed");
            console.log(name);
        }
        disconnectedCallback() {
            console.log("disconnected");
        }
    }
    const customElementName = kebabCase(elementLiteral.name);
    window.customElements.define(customElementName, CustomElementClass);
}
html `
  <robot-classroom>
    <classroom-blackboard></classroom-blackboard>
    <my-robot> </my-robot>
    <my-robot> </my-robot>
  </robot-classroom>
`;
html `
  <game-board>
    <game-tile></game-tile>
    <game-tile></game-tile>
    <game-tile></game-tile>
  </game-board>
`;

export default makeElement;
