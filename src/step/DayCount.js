import {useState} from "react";

function DayCount() {

  const [count,setCount] = useState(0)
  const [step, setStep ] = useState(1)

  const date = new Date();
  const day = date.setDate(date.getDate() + count)
  const newDate = new Date(day)

  let date2 = Date.now()
  let dateCount = date2 + count*1000*60*60*24
  const dateCountFormat = new Date(dateCount)

  return (
    <div>
      <div className='buttons'>
        <button onClick={() => setStep(s => s -1 )}>-</button>
        step : {step}
        <button onClick={() => setStep(s => s + 1)}>+</button>
      </div><br/>
      <div className='buttons'>
        <button onClick={() => setCount(c => (c - step))}>-</button>
        count : {count}
        <button onClick={() => setCount(c => (c + step))}>+</button>
      </div>
      <div className='message'>
        {count > 0 ? `${count} days from today is ` : count < 0 ? `${Math.abs(count)} days ago today is ` : "today "}
        {newDate.toDateString()}<br/>
        {dateCountFormat.toDateString()}
      </div>
    </div>
  );
}

export default DayCount;