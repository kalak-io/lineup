import { Component, h } from "@stencil/core";

/**
 * @slot default - Slot for the content of the button
 */

@Component({
  tag: "lp-button",
  scoped: true,
})
export class LpButton {
  private handleClick = () => {
    console.log("Received the button click!");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <slot>Button</slot>
        </button>
      </div>
    );
  }
}
