const Navbar = () => {
    return (
      <div>
        <div className="flex flex-row p-5 bg-[#D9D9D9] justify-between">
          <header>
            <p className="text-2xl">FITSHOPPER</p>
          </header>
  
          <nav className="list-none flex flex-row gap-12 justify-center w-full">
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
          </nav>

            <div className="flex gap-24 justify-end mr-4">
            <img src="heart.png" className="w-[25px] h-[25px]"></img>
            <img src="cart.png" className="w-[25px] h-[25px]"></img>
            <img src="profile.png" className="w-[25px] h-[25px]"></img>
            </div>
        </div>


      </div>
    );
  }
  
  export default Navbar;
  