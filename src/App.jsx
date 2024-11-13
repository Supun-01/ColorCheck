import ColorChecker from "./components/ColorChecker"

function App() {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2">
        <ColorChecker />
      </div>
      <div className="w-1/2">
        <ColorChecker />
      </div>

    </div>
  )
}

export default App