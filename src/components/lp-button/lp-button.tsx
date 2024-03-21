import { Component, Prop, h } from '@stencil/core';

/**
 * @slot default - Slot for the content of the button
 */

@Component({
  tag: 'lp-button',
})
export class LpButton {
  @Prop({ reflect: true })
  disabled: boolean = false;
  @Prop()
  callback?: Function;

  private handleClick = () => {
    if (this.callback) {
      this.callback();
    }
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
