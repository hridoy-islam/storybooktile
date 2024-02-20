import { TILE } from "./Tile";

export default {
  title: "Tile",
  component: TILE,
  parameters: {
    layout: "centered",
    // Optional parameter to generate documentation automatically
    // More info: https://storybook.js.org/docs/react/writing-docs/docgen
    docs: {
      description: {
        component: "This is a TILE component.",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // sellColor: { control: "color" },
    // buyColor: { control: "color" },
  },
};

export const Tile = {
  args: {
    label: "Tile",
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
