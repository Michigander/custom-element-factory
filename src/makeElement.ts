import { html, render, TemplateResult } from "lit-html";
import { kebabCase } from "lodash";

type ElementLiteral = (...props: unknown[]) => TemplateResult;

/**
 * Transforms a function into a custom element registered on the page.
 * @param wrappedComponent
 */
export default function (elementLiteral: ElementLiteral) {
  console.log(elementLiteral);
  const observedCallback = new Proxy(elementLiteral, {
    apply: function (target, thisArg, argumentsList) {
      const callbackResult = target.apply(thisArg, argumentsList);
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

    attributeChangedCallback(name: string) {
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

// another option to get attribute names
// function test(props: any[]) {
//   useAttributes(props);
// }

// function embed(model: Record<string, any>) {}
// function factory(model: Record<string, any>, view: ElementLiteral) {
//   async function product() {
//     for await (const update of embed(model)) {
//       render();
//     }
//   }
// }

const createRobot = (state) => (reactions) => (robotPresence) => {};

const myRobotState = {
  jumpCount: 0,
};

const myRobotReactions = (state: any) => {
  return {
    onJumpClicked: (event: CustomEvent) => ({
      jumpCount: state.jumpCount + event.detail.increment,
    }),
  };
};

const myRobotInterpretation = (state) => (reactions) => {
  return html``;
};

const myRobot = createRobot(myRobotState)(myRobotReactions)(
  myRobotInterpretation
);

const usage = html`
  <robot-classroom>
    <classroom-blackboard></classroom-blackboard>
    <my-robot> </my-robot>
    <my-robot> </my-robot>
  </robot-classroom>
`;

const game = html`
  <game-board>
    <game-tile></game-tile>
    <game-tile></game-tile>
    <game-tile></game-tile>
  </game-board>
`;
