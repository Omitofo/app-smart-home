import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="flex justify-around items-center p-4 border-t">
    <Link className="flex flex-col items-center" to="/">🏠<small>Home</small></Link>
    <Link className="flex flex-col items-center" to="/devices">💡<small>Devices</small></Link>
    <Link className="flex flex-col items-center" to="/reports">📊<small>Reports</small></Link>
    <Link className="flex flex-col items-center" to="/settings">⚙️<small>Settings</small></Link>
  </footer>
)

export default Footer
