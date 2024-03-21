import { Component, Prop, State, h } from "@stencil/core";

interface Option {
  name: string,
  label: string
}
export interface Options extends Array<Option> {}

@Component({
  tag: 'lp-select',
  scoped: true,
})
export class LpSelect {
  @Prop()
  options: Options = [];
  @State()
  value: string = "";

  private handleChange = (event) => {
    console.log('handle change');
    console.log(event);
    const index = event.target.options.selectedIndex - 1 >= 0 ? event.target.options.selectedIndex - 1 : 0;

    this.value = this.options[index].name
    console.log(this.value)
  }


  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
            <option value=""><slot name="label">Select an option</slot></option>
              {this.options.map(({ name, label }, index) => {
                return (
                  <option key={name} value={name}>{label}</option>
                  )
                })
             }
        </select>
      </div>
    )
  }
}
