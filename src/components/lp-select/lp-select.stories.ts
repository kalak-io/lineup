export default {
  title: "Components/LpSelect",
  argTypes: {
    options: {
      control: {
        type: "array",
      },
    }
  }
};

const Template = (args) => `<lp-select options="${args.options}"></lp-select>`;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { name: "Option 1" },
    { name: "Option 2" },
    { name: "Option 3" },
  ]
}
