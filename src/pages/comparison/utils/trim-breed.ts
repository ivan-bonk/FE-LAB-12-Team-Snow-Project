export const trimBreed = (name: string) => {
  if (name.length > 19) {
    const trimmed = name.slice(0, 18);
    return trimmed + '...';
  } else {
    return name;
  }
};
