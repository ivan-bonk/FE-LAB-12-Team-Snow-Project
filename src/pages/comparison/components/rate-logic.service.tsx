export default (rate: number) => {
  const clases: string[] = ['gy', 'gy', 'gy', 'gy', 'gy']; // gy - grey

  if (rate === 1) {
    clases[0] = 'r'; // r - red
  } else if (rate < 4) {
    for (let i = 0; i < rate; i++) {
      clases[i] = 'y'; // y - yellow
    }
  } else {
    for (let i = 0; i < rate; i++) {
      clases[i] = 'gr'; // gr - green
    }
  }

  return clases;
};
