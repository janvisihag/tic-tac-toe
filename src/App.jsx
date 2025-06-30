import Board from "./board";

function App() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full min-h-screen bg-primary-100">
      <a
        className="fixed right-0 top-1/3 flex flex-col w-min text-lg bg-black p-2 text-white text-center"
        href="https://github.com/janvisihag"
      >
        G i t H u b
      </a>
      <h1 className="text-3xl font-medium">Tic Tac Toe</h1>
      <Board />
    </div>
  );
}
export default App;
