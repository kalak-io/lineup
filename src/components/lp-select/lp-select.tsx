import { Component, h, Prop } from "@stencil/core";

interface Option {
  name: string
}
export interface Options extends Array<Option> {}

@Component({
  tag: 'lp-select',
  scoped: true,
})
export class LpSelect {
  @Prop()
  options: Options = [];

  render() {
    return (
      <div>
        <select>
          { this.options }
        </select>
      </div>
    )
  }
}
