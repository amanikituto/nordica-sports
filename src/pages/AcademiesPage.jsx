import React from 'react'
import { Footer, Navbar } from "../components";
const AcademiesPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Nordica is your premier sports destination in Kenya, fueled by a passion for the game and a commitment to excellence. Inspired by the Nordic tradition of athleticism, we offer a curated selection of top-quality sports gear, apparel, and footwear from leading brands. Our knowledgeable staff are passionate sports enthusiasts ready to share their expertise, ensuring you find the perfect gear for your needs. We are committed to supporting the local sports community through sponsorships, events, and initiatives promoting an active lifestyle. Whether you're a seasoned professional or a weekend warrior, join the Nordica community and experience the difference that quality gear, expert advice, and a shared passion for sports can make.

        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Sports Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Sports Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="/src/assets/sports-items.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Sports Items</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jerseys and Kits</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AcademiesPage