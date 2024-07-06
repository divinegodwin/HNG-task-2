const Navbar = () => {
    return (
      <div>
        <div className="flex flex-row p-5 bg-[#D9D9D9] justify-between">
          <header>
            <h1>FITSHOPPER</h1>
          </header>
  
          <nav className="list-none flex flex-row gap-12 justify-center w-full">
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
          </nav>

            <div>
                
            </div>
        </div>

<main className="flex flex-row justify-between pr-[6rem] pt-[2rem]">
  <div className="pt-[16rem] pl-[4rem] ">
    <p2 className="text-[4rem] ">Unluck Your Fashion Potential</p2>
    <p className="text-xl">Come and explore our world of fashion, and<br />
     let us help you elevate your style and <br />
    elevate your life!</p>

    <button className="w-[250px] h-[60px] bg-[#9747FF] text-white mt-8">
Shop Now
    </button>
  </div>
    <section>
        <img src="image1.png" className=""></img>
    </section>
</main>

      </div>
    );
  }
  
  export default Navbar;
  