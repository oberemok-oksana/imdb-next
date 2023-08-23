export const shortTitle = (string: string) => {
  return string.length < 20 ? string : string.slice(0, 20) + "...";
};
