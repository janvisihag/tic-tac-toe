export default function Square({ children, onClick }) {
  return (
    <button
      className="w-12 h-12 bg-blue-200 border border-blue-400 flex justify-center items-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
