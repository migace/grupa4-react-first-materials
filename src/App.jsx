import { Counter } from "./components/Counter";
import { Hello } from "./components/Hello";

function App() {
  return (
    <>
      <h1>App</h1>
      <Hello name="Test" age={12} />
      <Hello />
      <Counter />
    </>
  );
}

export default App;
