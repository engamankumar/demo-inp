import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [countFix, setCountFix] = useState(0);
  const [taskRunning, setTaskRunning] = useState(false);

  const startLongTask = () => {
    // Simulate a long-running task
    taskA();
    taskB();
    taskC();
    // After the task is complete, update the count state
    setCount(count + 1);
  };
  const taskA = () => {
    for (let i = 0; i < 1000000000; i++) {
      // This loop is computationally intensive and blocks the main thread
    }
  };
  const taskB = () => {
    for (let i = 0; i < 1000000000; i++) {
      // This loop is computationally intensive and blocks the main thread
    }
  };
  const taskC = () => {
    for (let i = 0; i < 1000000000; i++) {
      // This loop is computationally intensive and blocks the main thread
    }
  };
 const taskD = () => {
   for (let i = 0; i < 100000000; i++) {
     // This loop is computationally intensive and blocks the main thread
   }
 };
  const startLongTaskFix = () => {
    // Simulate a long-running task
    setTaskRunning(true)
     taskD();
    setTimeout(() => {
      taskA();
      taskB();
      taskC();
      // After the task is complete, update the count state
      setCountFix(countFix + 1);
      setTaskRunning(false);
    },0);
  };

  return (
    <div>
      <h1>Interaction to Next Paint Issue</h1>
      <p>Count: {count}</p>
      <button onClick={startLongTask}>Start Long Task</button>

      <h1>Interaction to Next Paint FIX</h1>
      <p>Count: {countFix}</p>
      <button onClick={startLongTaskFix}>
        {taskRunning ? "task running" : "Start Task"}
      </button>
    </div>
  );
}

export default App;
