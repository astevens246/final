// Provides navigation links to different sections of the website.
// This component may be part of the Header component or a separate component used for routing.
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-500">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/about" className="text-white">About</Link></li>
        <li><Link to="/projects" className="text-white">Projects</Link></li>
        <li><Link to="/contact" className="text-white">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;