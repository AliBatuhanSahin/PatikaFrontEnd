import React from 'react';
import './SectionPurchaseForm.css'
import Img1 from '../../assets/purchase1.jpg'
import Img2 from '../../assets/purchase2.jpg'
import Img3 from '../../assets/purchase3.jpg'
import Img4 from '../../assets/purchase4.jpg'

function SectionPurchaseFrom() {
  return (
    <section id="about-us" className="purchase-from-section">
      <div className="purchase-from-container">
        <article className="purchase-from-header">
          <div className="purchase-header-top">
            <h3>PURCHASE FROM US</h3>
            <span> - </span>
          </div>
          <div className="purchase-header-bottom">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing amet facilis elit.</p>
            <p>Hampden-Sydney Collage.</p>
          </div>
        </article>
        <article className="purchase-from-footer">
          <div className="purchase-from-card ">
            <img src={Img1}  alt="" />
            <div className="card-content">
              <div className="card-content-top">
                <h4>
                  Kettbell
                  <span> / </span>
                  5kg
                </h4>
                <div className="price">
                  <span>89,99$</span>
                  <span> / </span>
                  <span>59,99$</span>
                </div>
              </div>
              <div className="card-content-bottom">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Add To Cart</span>
              </div>
            </div>
          </div>
          <div className="purchase-from-card ">
            <img src={Img2}  alt="" />
            <div className="card-content">
              <div className="card-content-top">
                <h4>Treadmill</h4>
                <div className="price">
                  <span>899,99$</span>
                  <span> / </span>
                  <span>599,99$</span>
                </div>
              </div>
              <div className="card-content-bottom">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Add To Cart</span>
              </div>
            </div>
          </div>
          <div className="purchase-from-card ">
            <img src={Img3}  alt="" />
            <div className="card-content">
              <div className="card-content-top">
                <h4>Adjustable Dumbell</h4>
                <div className="price">
                  <span>89,99$</span>
                  <span> / </span>
                  <span>59,99$</span>
                </div>
              </div>
              <div className="card-content-bottom">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Add To Cart</span>
              </div>
            </div>
          </div>
          <div className="purchase-from-card ">
            <img src={Img4} alt="" />
            <div className="card-content">
              <div className="card-content-top">
                <h4>
                  Kettbell
                  <span> / </span>
                  3kg
                </h4>
                <div className="price">
                  <span>899,99$</span>
                  <span> / </span>
                  <span>599,99$</span>
                </div>
              </div>
              <div className="card-content-bottom">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Add To Cart</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default SectionPurchaseFrom;