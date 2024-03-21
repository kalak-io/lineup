import { Component, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'lp-dropdown',
})
export class LpDropdown {
  @State() open: boolean = false;

  @Listen('click')
  onClick() {
    this.open = !this.open;
  }

  // add prop with list of options in menu

  render() {
    return (
      <div>
        <slot name="trigger">
          <lp-button />
        </slot>
        {this.open ? <lp-dropdown-item></lp-dropdown-item> : <div />}
      </div>
    );
  }
}
