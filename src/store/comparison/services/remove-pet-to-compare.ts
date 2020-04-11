export const removePet = (arr: string[], id: string) => {
  if (arr.length > 0) {
    const idx = arr.indexOf(id);

    return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
  }
};
