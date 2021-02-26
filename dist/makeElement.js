import { html } from "lit-html";
import { kebabCase } from "lodash";
/**
 * Transforms a function into a custom element registered on the page.
 * @param wrappedComponent
 */
export default function (elementLiteral) {
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
const createRobot = (state) => (reactions) => (robotPresence) => { };
const myRobotState = {
    jumpCount: 0,
};
const myRobotReactions = (state) => {
    return {
        onJumpClicked: (event) => ({
            jumpCount: state.jumpCount + event.detail.increment,
        }),
    };
};
const myRobotInterpretation = (state) => (reactions) => {
    return html ``;
};
const myRobot = createRobot(myRobotState)(myRobotReactions)(myRobotInterpretation);
const usage = html `
  <robot-classroom>
    <classroom-blackboard></classroom-blackboard>
    <my-robot> </my-robot>
    <my-robot> </my-robot>
  </robot-classroom>
`;
const game = html `
  <game-board>
    <game-tile></game-tile>
    <game-tile></game-tile>
    <game-tile></game-tile>
  </game-board>
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZUVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWFrZUVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBMEIsTUFBTSxVQUFVLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUluQzs7O0dBR0c7QUFDSCxNQUFNLENBQUMsT0FBTyxXQUFXLGNBQThCO0lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUU7UUFDakQsS0FBSyxFQUFFLFVBQVUsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhO1lBQzdDLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlELENBQUM7S0FDRixDQUFDLENBQUM7SUFFSCxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLE1BQU0sa0JBQW1CLFNBQVEsV0FBVztRQUMxQyxNQUFNLEtBQUssa0JBQWtCO1lBQzNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBRUQ7WUFDRSxLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsaUJBQWlCO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBRUQsd0JBQXdCLENBQUMsSUFBWTtZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBRUQsb0JBQW9CO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUIsQ0FBQztLQUNGO0lBRUQsTUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDdEUsQ0FBQztBQUVELHdDQUF3QztBQUN4QyxnQ0FBZ0M7QUFDaEMsMEJBQTBCO0FBQzFCLElBQUk7QUFFSixnREFBZ0Q7QUFDaEQsdUVBQXVFO0FBQ3ZFLCtCQUErQjtBQUMvQixpREFBaUQ7QUFDakQsa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixNQUFNO0FBQ04sSUFBSTtBQUVKLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUVwRSxNQUFNLFlBQVksR0FBRztJQUNuQixTQUFTLEVBQUUsQ0FBQztDQUNiLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7SUFDdEMsT0FBTztRQUNMLGFBQWEsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTO1NBQ3BELENBQUM7S0FDSCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtJQUNyRCxPQUFPLElBQUksQ0FBQSxFQUFFLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQ3pELHFCQUFxQixDQUN0QixDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFBOzs7Ozs7Q0FNakIsQ0FBQztBQUVGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQTs7Ozs7O0NBTWhCLENBQUMifQ==