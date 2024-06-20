import {menuItems} from "./data/db.ts";
import {MenuItem} from "./components/MenuItem.tsx";

function App() {

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="">
          <h2>Menú</h2>
          {menuItems.map( item => (
            <MenuItem
              key={item.id}
            />
          ))}
        </div>
        <div className="">
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
