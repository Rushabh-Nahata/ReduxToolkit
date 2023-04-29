import Chance from "Chance";

const chance = Chance();

export const FakeName = () => {
  console.log(chance.name({ middle: true }));
  return chance.name({ middle: true });
};
