function Navbar(){
    return(
        <div className=" flex items-center justify-between px-20 bg-black text-white py-2">
        <div className=" flex items-center gap-x-4">
          <div className=" text-xl">
            Uber <br />
            For Business
          </div>
          <div className=" cursor-pointer">Overview</div>
          <div className=" cursor-pointer">Solutions</div>
          <div className=" cursor-pointer">Pricing</div>
          <div className=" cursor-pointer">Customer Support</div>
          <div className=" cursor-pointer">Resources</div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className=" cursor-pointer">EN</div>
          <div className=" cursor-pointer">Contact Us</div>
          <div className=" cursor-pointer">Login</div>
          <div className=" cursor-pointer bg-white text-black rounded-full px-4 py-2">
            Get Started
          </div>
        </div>
      </div>
    );


}
export default Navbar