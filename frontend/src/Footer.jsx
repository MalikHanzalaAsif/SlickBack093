import TextField from '@mui/material/TextField';
import "./styles/Footer.css";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white " id="footer">
      <div id="upperFooter" className="text-xs flex justify-around flex-wrap">
        <div id="box1" className='mb-16 mt-8'>
          <img src="/img/Logo mockup.png" alt="website logo" className="h-20 mb-4" />
          <a href='#' className='mb-4 block'>Privacy Policy</a>
          <a href='#' className='mb-4 block'>Disclaimer</a>
          <ul className="flex mb-4">
            <li>
              <a href="#"><img src="/img/fb.png" alt="facebook icon" className="h-6 cursor-pointer" /></a>
            </li>
            <li>
              <a href="#"><img src="/img/insta.png" alt="instagram icon" className="h-6 cursor-pointer" /></a>
            </li>
            <li>
              <a href="#"><img src="/img/linkedin.png" alt="linkedin icon" className="h-6 cursor-pointer" /></a>
            </li>
          </ul>
        </div>
        <div id="box2" className='mb-16 mt-8'>
          <h1 className="text-xl mb-4">USEFUL LINKS</h1>
          <Link to='/' className="mb-4 block cursor-pointer">HOME</Link>
          <Link to='/about' className="mb-4 block cursor-pointer">ABOUT</Link>
          <Link to='/shop' className="mb-4 cursor-pointer block">SHOP</Link>
          <Link to='/shop' className="mb-4 block cursor-pointer">CATEGORIES</Link>
          <Link to='/contact' className="mb-4 block cursor-pointer">CONTACT</Link>
        </div>
        <div id="box3" className='mb-16 mt-8'>
          <h1 className="text-xl mb-4">PRODUCTS</h1>
          <Link to='/shop' className="mb-4 block cursor-pointer">ACCESSORIES</Link>
          <Link to='/shop' className="mb-4 block cursor-pointer">CLOTHES</Link>
          <Link to='/shop' className="mb-4 block cursor-pointer">MUGS</Link>
          <Link to='/shop' className="mb-4 block cursor-pointer">CAPS</Link>
          <Link to='/shop' className="mb-4 block cursor-pointer">WATCHES</Link>
        </div>
        <div id="box4" className='mb-16 mt-8'>
          <h1 className="text-xl mb-4">Signup for email</h1>
          <p className="mb-4">Enter your email address for daily updates</p>
          <form action="" className="mb-4" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder='enter your email' required className='h-6 p-2 text-black' />
            <Link to="/contact">
              <button className='bg-slate-800 p-1.5 rounded-md ml-2'>Subscribe</button>
            </Link>
          </form>
        </div>
      </div>
      <div
        id="lowerFooter"
        className="flex justify-around flex-col h-13 py-4 items-center border-solid border-t-[1px] border-slate-800"
      >
        <div id="ownerShip" className="text-sm">
          © 2024 Created by Unique Advertisers. All rights reserved.
        </div>
        <div id="paymentOptions">
          <ul className="flex">
            <li>
              <img src="/img/visa.png" alt="visa card" className="h-8 m-2" />
            </li>
            <li>
              <img
                src="/img/master_icon.png"
                alt="master card"
                className="h-8 m-2"
              />
            </li>
            <li>
              <img src="/img/union.png" alt="union pay" className="h-8 m-2" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
