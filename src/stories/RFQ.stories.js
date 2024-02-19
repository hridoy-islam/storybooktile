import { RFQ } from "./RFQ";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "RFQ",
  component: RFQ,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Rfq = {
  args: {
    label: "rfq",
    title: "USDT / USD",
    sell_rate: 0.99,
    sell_price: 99,
    sell_item: 5,
    buy_rate: 1.0,
    buy_price: 1,
    buy_item: 1,
    amount: 1000000,
  },
};
