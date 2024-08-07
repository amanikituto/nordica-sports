import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Here are some of our partners

        </p>

        <h2 className="text-center py-4">Marist University</h2>
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

export default AboutPage