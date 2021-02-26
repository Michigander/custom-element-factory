# custom element factory

This is a project to solve the problem of creating a re-usable html tag.

The methods of using the custom element apis, extending HTMLElement, feel awkward when following a pattern of uni-directional functional component.

This project aims to support that pattern with a simple factory function

```ts
const myElement = ({ attributes, props }) => html` <slot> replace me! </slot> `;

makeElement(myElement);

// now it is usable from the page as <my-element></my-element>
```
