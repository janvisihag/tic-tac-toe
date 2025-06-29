import Board from "./board";

function App() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full min-h-screen bg-primary-100">
      <h1 className="text-3xl font-medium">Tic Tac Toe</h1>
      <Board />
    </div>
  );
}
export default App;
