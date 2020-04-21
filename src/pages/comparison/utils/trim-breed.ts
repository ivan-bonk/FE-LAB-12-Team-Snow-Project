export const trimBreed = (name: string) => {
  if (name.length >= 19) {
    let trimmed: RegExpMatchArray | null = name.match(/.{1,19}/);
    return trimmed + '...';
  } else {
    return name;
  }
};
