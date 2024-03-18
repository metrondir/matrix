const fillOnesMatrice = (size) => {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = 1;
    }
  }
  return matrix;
};

const fillEmptyMatrice = (size) => {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
};

const fillRandomMatrice = (size) => {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return matrix;
};
const hardcodedMatrix = [
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 0, 1, 0],
  [0, 0, 1, 1],
];
const fillVariantMatrice = () => {
  const size = hardcodedMatrix.length;
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = hardcodedMatrix[i][j];
    }
  }
  return matrix;
};

const fillDiagonalMatrice = (size) => {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = i === j ? 1 : 0;
    }
  }
  return matrix;
};

const fillAntidiagonalMatrice = (size) => {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = i + j === size - 1 ? 1 : 0;
    }
  }
  return matrix;
};

export {
  fillOnesMatrice,
  fillEmptyMatrice,
  fillRandomMatrice,
  fillVariantMatrice,
  fillDiagonalMatrice,
  fillAntidiagonalMatrice,
};
