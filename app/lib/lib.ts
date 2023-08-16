export const shortTitle = (string: string) => {
  return string.length < 30 ? string : string.slice(0, 30) + "...";
};
