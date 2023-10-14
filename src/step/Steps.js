import {useState} from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "next I don't know 👌",
  "some new added 💕"
];

function Steps() {

  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function onPreviousClick() {
    if (step === 1) setStep(messages.length)
    else setStep(currentStep => currentStep - 1)
  }

  function onNextClick() {
    if (step === messages.length) setStep(1)
    else setStep(currentStep => currentStep + 1)
  }
  const message = messages.map((msg, idx) =>
    <div className={`${step >= idx + 1 && 'active'}`}
         key={idx}>{idx + 1}
    </div>
  )

  return (
    <div>
      <button onClick={() =>
        setIsOpen(currState => !currState)} >
        ❌</button>
      {isOpen && <div className="steps">
        <div className={'numbers'}>
          {message}
        </div>
        <p className='message'>Step {step} : {messages[step - 1]}</p>
        <div className='buttons'>
          <button onClick={onPreviousClick}> Previous</button>
          <button onClick={onNextClick}>Next</button>
        </div>
      </div>}
    </div>
  );
}

export default Steps;