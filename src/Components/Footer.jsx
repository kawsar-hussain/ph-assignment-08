import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 pb-6">
      <footer className="footer sm:footer-horizontal bg-black  ">
        <aside>
          <img src="/logo.png" className="w-[70px]" alt="" />
          <p>HERO.IO</p>
          <p className="text-gray-400">Providing trusted app installations since 2013.</p>
          <a href="https://github.com/kawsar-hussain" target="blank" className="lg:hidden block mt-2">
            <button className="btn">
              <i className="fa-brands fa-github"></i>Contribute
            </button>
          </a>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">App Reviews</a>
          <a className="link link-hover">App Updates</a>
          <a className="link link-hover">App Promotions</a>
          <a className="link link-hover">App Support</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="px-0 lg:px-[80px]">
        <hr className="text-gray-700 mb-6" />
      </div>
      <div className="text-center  text-gray-400">
        <p className=" text-sm">Copyright &copy; 2025 HERO.IO - All right reserved</p>
        <p className="text-xs mt-1">
          Developed By <span className="font-bold">Kawsar Hussain</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
