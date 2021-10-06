import "./PrizeNumbers.css";
import React, { useState } from "react";

const PrizeNumbers = (props) => {
    const [qtdOfNumbers, setQtdOfNumbers] = useState(6);

    const [randomGeneratedNumbers, setRandomGeneratedNumbers] = useState([0]);

    function handleChange(e) {
        setQtdOfNumbers(e.target.value);
    }

    function generatePrizeNumbers(qtdOfNumbers, minNumber, maxNumber) {
        if (qtdOfNumbers > 60) {
            return;
        }

        let randomNumbers = [];

        while (qtdOfNumbers > 0) {
            const randomNumber =
                Math.floor(Math.random() * maxNumber) + minNumber;

            if (randomNumbers.includes(randomNumber) === false) {
                randomNumbers.push(randomNumber);
                qtdOfNumbers--;
            }
        }

        randomNumbers.sort((a, b) => a - b);
        handleChangeOfRandomNumbers(randomNumbers);
    }

    function handleChangeOfRandomNumbers(randomNumbersParam) {
        setRandomGeneratedNumbers(randomNumbersParam);
    }

    return (
        <div>
            <div className="qttNumberInput">
                <label htmlFor="qtdOfNumbersInput">Qtt. of Numbers</label>
                <input
                    id="qtdOfNumbersInput"
                    value={qtdOfNumbers}
                    onChange={handleChange}
                    min="2"
                    max="12"
                    type="number"
                ></input>
            </div>
            <button
                className="btnGeneratePrizeNumbers"
                onClick={(e) => generatePrizeNumbers(qtdOfNumbers, 1, 60)}
            >
                Generate
            </button>
            <h3>
                <strong>{randomGeneratedNumbers.join(" ")}</strong>
            </h3>
        </div>
    );
};

export default PrizeNumbers;
