// import "./App.css";

function App() {
  const handleChange = (e) => {
    alert(e.target.value);
  };

  return (
    <div>
      <input onChange={() => handleChange()}></input>
    </div>
  );
}

export default App;
