import Themetoggle from "../../app/ThemToggle";
import "./navbar.scss";
export default function Navbar() {
  return (
    <div className='container'>
      <div className='navbar py-4'>
        <p className='h2 logo'>Company</p>
        <div className='left-menu d-flex align-items-center'>
          <Themetoggle />
          <div className='menu'>
            <i class='bi bi-list'></i>
          </div>
        </div>
      </div>
    </div>
  );
}
