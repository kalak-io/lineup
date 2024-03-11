import { Component, Prop, h } from '@stencil/core';

/**
 * @slot default - Slot for the content of the button
 */

@Component({
  tag: 'lp-button',
})
export class LpButton {
  @Prop() callback?: Function;

  private handleClick = () => {
    if (this.callback) {
      this.callback();
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <slot>Click on</slot>
        </button>
      </div>
    );
  }
}
