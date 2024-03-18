import React, { useEffect } from "react";
import { fillEmptyMatrice } from "./ButtonFunc";

const Matrix = ({ matrix, setMatrix, matrixSize }) => {
  const handleInputChange = (event, rowIndex, colIndex) => {
    const { value } = event.target;
    const updatedMatrix = matrix.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) =>
            j === colIndex ? (isNaN(value) ? "" : Number(value)) : cell
          )
        : row
    );
    setMatrix(updatedMatrix);
  };

  const emptyMatrix = Array.from({ length: matrixSize }, () =>
    Array(matrixSize).fill(0)
  );

  const displayMatrix = matrix;
  //console.log(matrixSize);
  //console.log(matrix.length);
  useEffect(() => {
    setMatrix(fillEmptyMatrice(matrixSize));
  }, [matrixSize]);
  return (
    <div className="dynamic-matrix-container">
      <div className="dynamic-hover">
        <table className="dynamic-matrix">
          <tbody>
            {displayMatrix.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                {row.map((value, colIndex) => (
                  <td key={`col-${colIndex}`}>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Matrix;
