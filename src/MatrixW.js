import React, { useState, useEffect } from "react";
import "./index.css";
import Matrix from "./Matrix";
import {
  fillOnesMatrice,
  fillEmptyMatrice,
  fillRandomMatrice,
  fillVariantMatrice,
  fillDiagonalMatrice,
  fillAntidiagonalMatrice,
} from "./ButtonFunc";
import {
  intersection,
  union,
  difference,
  symmetricDifference,
  complement,
  inverseRelation,
  composition,
  narrowedRelation,
  isReflexive,
  isAntiReflexive,
  isSymmetric,
  isAsymmetric,
  isAntiAsymmetric,
  isTransitive,
  isAntiSymmetric,
  isAcyclic,
  isConnected,
  isTolerant,
  isEquivalence,
  isQuasiOrder,
  isOrder,
  reachability,
  mutualReachability,
  symmetricComponent,
  asymmetricComponent,
  transitiveClosure,
  allBool,
} from "./func";

const DynamicMatrix = () => {
  // Define the matrix state and its setter function
  const [matrixSize, setMatrixSize] = useState(4);
  const [matrix1, setMatrix1] = useState(fillEmptyMatrice(matrixSize));
  const [matrix2, setMatrix2] = useState(fillEmptyMatrice(matrixSize));
  const [matrix3, setMatrix3] = useState(fillEmptyMatrice(matrixSize));
  const [matrix4, setMatrix4] = useState(fillEmptyMatrice(matrixSize));
  const Matrixs = [matrix1, matrix2, matrix3, matrix4];
  const [resultSize, setResultSize] = useState(4);
  const [activateMatrix, setActivateMatrix] = useState(0);
  const [activateM1, setActivateM1] = useState(0);
  const [activateM2, setActivateM2] = useState(1);
  const [funcIndex, setFuncIndex] = useState(0);
  const [boolResultFlag, setBoolResultFlag] = useState(false);
  const [boolResult, setBoolResult] = useState(false);
  const [boolAll, setBoollAll] = useState(false);
  const [resultMatrix, setResultMatrix] = useState(
    fillEmptyMatrice(resultSize)
  );
  const funcs = [
    intersection,
    union,
    difference,
    symmetricDifference,
    complement,
    inverseRelation,
    composition,
    narrowedRelation,
    isReflexive,
    isAntiReflexive,
    isSymmetric,
    isAsymmetric,
    isAntiAsymmetric,
    isTransitive,
    isAntiSymmetric,
    isAcyclic,
    isConnected,
    isTolerant,
    isEquivalence,
    isQuasiOrder,
    isOrder,
    reachability,
    mutualReachability,
    symmetricComponent,
    asymmetricComponent,
    transitiveClosure,
  ];
  const options = [
    "Перетин",
    "Обєднання",
    "Різниця",
    "Симетрична різниця",
    "Доповнення ",
    "Обернене відношення",
    "Композиція",
    "Звужене відношення",
    "Рефлексивне відношення",
    "Антирефлексивне відношення",
    "Симетричне відношення",
    "Асиметричне відношення",
    "Антиасиметричне відношення",
    "Транзитивне відношення",
    "Антисиметричне відношення",
    "Ациклічне відношення",
    "Зв'язане відношення",
    "Толерантне відношення",
    "Еквівалентне відношення",
    "Частково порядкове відношення",
    "Порядкове відношення",
    "Досяжність",
    "Мутуальна досяжність",
    "Симетрична компонента",
    "Асиметрична компонента",
    "Закриття транзитивності",
  ];
  const SettersMaster = [setMatrix1, setMatrix2, setMatrix3, setMatrix4];

  const handleOnesMatrice = () => {
    const matrix = fillOnesMatrice(matrixSize);
    SettersMaster[activateMatrix](matrix);
  };

  const handleEmptyMatrice = () => {
    const matrix = fillEmptyMatrice(matrixSize);
    SettersMaster[activateMatrix](matrix);
  };
  const handleRandomMatrice = () => {
    const matrix = fillRandomMatrice(matrixSize);
    SettersMaster[activateMatrix](matrix);
  };
  const handleVariantMatrice = () => {
    const matrix = fillVariantMatrice(matrixSize);
    SettersMaster[activateMatrix](matrix);
  };
  const handleDiagonalMatrice = () => {
    const matrix = fillDiagonalMatrice(matrixSize);
    SettersMaster[activateMatrix](matrix);
  };
  const handleAntidiagonalMatrice = () => {
    const matrix = fillAntidiagonalMatrice(matrixSize);
    SettersMaster[activateMatrix](matrix);
  };
  const handleAllBoll = () => {
    const result = {
      matrixA: Matrixs[activateM1],
      matrixB: Matrixs[activateM2],
      matrixC: Matrixs[2],
      size: resultSize,
      result: matrix4,
    };
    const ob = allBool(result);
    console.log(ob);
  };
  const handleCalculate = () => {
    const result = funcs[funcIndex]({
      matrixA: Matrixs[activateM1],
      matrixB: Matrixs[activateM2],
      matrixC: Matrixs[2],
      size: resultSize,
      result: matrix4,
    });
    console.log(matrix4);
    setMatrix4([...matrix4]);
    if (funcIndex - 1 == 6) {
      setMatrix4(result);
    } else if (funcIndex - 1 > 6 && funcIndex - 1 < 20) {
      setBoolResultFlag(true);
      setBoolResult(result);
    } else {
      setBoolResultFlag(false);
      setResultMatrix(result);
    }
  };

  return (
    <>
      <div>
        <div style={{ display: "flex" }}>
          <span>Size of matrix</span>
          <input
            type="number"
            value={matrixSize}
            onChange={(e) => {
              const { value } = e.target;
              if (
                value === "" ||
                (parseInt(value) >= 2 && parseInt(value) <= 6)
              ) {
                setMatrixSize(value);
              }
            }}
            min={2}
            max={6}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "20px" }}>
            <Matrix
              matrix={matrix1}
              setMatrix={setMatrix1}
              matrixSize={matrixSize}
            />
          </div>

          <div style={{ marginRight: "20px" }}>
            <Matrix
              matrix={matrix2}
              setMatrix={setMatrix2}
              matrixSize={matrixSize}
            />
          </div>

          <div style={{ marginRight: "20px" }}>
            <Matrix
              matrix={matrix3}
              setMatrix={setMatrix3}
              matrixSize={matrixSize}
            />
          </div>

          {!boolResultFlag ? (
            <div>
              <Matrix
                matrix={matrix4}
                setMatrix={setMatrix4}
                matrixSize={matrixSize}
              />
            </div>
          ) : (
            <label>Result: {boolResult ? "true" : "false"}</label>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <input
            name="value"
            type="radio"
            checked={activateMatrix === 0}
            value={activateMatrix}
            onChange={() => setActivateMatrix(0)}
          />
          <span> Active first matrix</span>
          <input
            name="value"
            type="radio"
            value={activateMatrix}
            onClick={() => setActivateMatrix(1)}
            className="mr-2 text-blue-500 focus:ring-blue-400 focus:ring-offset-blue-100"
          />
          <span> Active second matrix</span>
          <input
            name="value"
            type="radio"
            value={activateMatrix}
            onClick={() => setActivateMatrix(2)}
          />
          <span> Active third matrix</span>
        </div>
        <div>
          <button className="" onClick={() => handleEmptyMatrice()}>
            Empty
          </button>
          <button onClick={() => handleOnesMatrice()}>Ones</button>
          <button onClick={() => handleRandomMatrice()}>Random</button>
          <button onClick={() => handleDiagonalMatrice()}>Diagonal</button>
          <button onClick={() => handleAntidiagonalMatrice()}>
            Antidiagonal
          </button>
          <button onClick={() => handleVariantMatrice()}>Variant</button>
          <button onClick={() => handleAllBoll()}>Check All Bool Func</button>
        </div>
        <div style={{ padding: "10px" }}>
          <input
            type="button"
            value="+"
            onClick={() => setActivateM1(activateM1 + 1)}
          />
          <input
            type="button"
            value="-"
            onClick={() => setActivateM1(activateM1 - 1)}
          />
          {activateM1 === 0 && <span>A</span>}
          {activateM1 === 1 && <span>B</span>}
          {activateM1 === 2 && <span>C</span>}
          <input
            type="button"
            value="+"
            onClick={() => setActivateM2(activateM2 + 1)}
          />
          <input
            type="button"
            value="-"
            onClick={() => setActivateM2(activateM2 - 1)}
          />
          {activateM2 === 0 && <span>A</span>}
          {activateM2 === 1 && <span>B</span>}
          {activateM2 === 2 && <span>C</span>}
          <input
            type="number"
            value={resultSize}
            onChange={(e) => {
              const { value } = e.target;
              if (
                value === "" ||
                (parseInt(value) >= 2 &&
                  parseInt(value) <= 6 &&
                  parseInt(value) <= matrixSize)
              ) {
                setResultSize(value);
              }
            }}
            min={2}
            max={Math.min(matrixSize, 6)}
          />
          <select onChange={(e) => setFuncIndex(e.target.selectedIndex)}>
            {options.map((options, index) => (
              <option key={index} value={options}>
                {options}
              </option>
            ))}
          </select>
          <button onClick={() => handleCalculate()}>Calculate</button>
        </div>
      </div>
    </>
  );
};

export default DynamicMatrix;
