import { Link } from 'react-router-dom'

const Header = () => (
  <header className="flex justify-between items-center p-4 shadow-md">
    <button className="text-xl">☰</button>
    <div className="font-bold text-lg">SmartHome</div>
    <Link to="/settings">⚙️</Link>
  </header>
)

export default Header
