import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'lp-dropdown-menu',
})
export class LpDropdownMenu {
  @Prop() options: object[] = [];

  render() {
    return <div>Menu</div>;
  }
}
