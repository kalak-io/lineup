import { Component, h, Prop } from "@stencil/core";

/**
 * @slot default - Slot for the content of the button
 */

@Component({
  tag: "lp-button",
  scoped: true,
})
export class LpButton {
  @Prop({ reflect: true })
  disabled: boolean = false;

  private handleClick = () => {
    console.log("Received the button click!");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick} disabled={this.disabled}>
          <slot>Button</slot>
        </button>
      </div>
    );
  }
}
