import { useState } from "react";

export default function UserInput() {
  const [initialValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(newValue, inputIdentifier) {
    setInputValues((prevValues) => {
      return {
        ...prevValues,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Intial Investment</label>
          <input
            type="number"
            required
            value={initialValues.initialInvestment}
            onChange={(event) =>
              handleChange(event.target.value, "initialInvestment")
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={initialValues.annualInvestment}
            onChange={(event) =>
              handleChange(event.target.value, "annualInvestment")
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={initialValues.expectedReturn}
            onChange={(event) =>
              handleChange(event.target.value, "expectedReturn")
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={initialValues.duration}
            onChange={(event) => handleChange(event.target.value, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
