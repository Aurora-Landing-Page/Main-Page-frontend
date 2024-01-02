import React from 'react';
import './Sponsors.css';
import cocaImg from '../../assets/cocacola.60789f99.png'
import img2 from '../../assets/blu-lounge.f54b1da0.jpg'
import Navbar from '../Navbar/Navbar';
import Loader from '../AlertAndLoader/Loader';
import { useEffect,useState } from 'react';

const Sponsors = () => {

  const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

  

  return (
      <div>
        {
          loading? (<Loader/>):(
            <div className='body1'>
              <Navbar />
              <div className="sponsors-marketHead">
                <h2>Marketing Heads</h2>
                <div className="sponsors-names">
                  <div className="sponsors-Head">
                    <h3>Pankaj Goyal</h3>
                    <a href="mailto:abc@aurorafest.org">abc@aurorafest.org</a>
                    <a href="tel:+91-9999999999">+91-9999999999</a>
                  </div>
                  <div className="sponsors-Head">
                    <h3>Pankaj Goyal</h3>
                    <a href="mailto:abc@aurorafest.org">abc@aurorafest.org</a>
                    <a href="tel:+91-9999999999">+91-9999999999</a>
                  </div>
                </div>
              </div>

              <div className="sponsors-sponContainer">
                <div className="sponsors-innerContainer1">
                  <h1>SPONSORS</h1>
                  <div className="sponsors-titleSpon">
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={cocaImg} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>Coca Cola</h4>
                        <span>Title Sponsor</span>
                      </div>
                    </div>
                  </div>
                  <div className="sponsors-restSpon">
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={cocaImg} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>SPONSOR NAME</h4>
                        <span>Lorem ipsum dolor.</span>
                      </div>
                    </div>
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={img2} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>SPONSOR NAME</h4>
                        <span>Lorem ipsum dolor.</span>
                      </div>
                    </div>
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={img2} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>SPONSOR NAME</h4>
                        <span>Lorem ipsum dolor.</span>
                      </div>
                    </div>
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={img2} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>SPONSOR NAME</h4>
                        <span>Lorem ipsum dolor.</span>
                      </div>
                    </div>
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={img2} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>SPONSOR NAME</h4>
                        <span>Lorem ipsum dolor.</span>
                      </div>
                    </div>
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={img2} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>SPONSOR NAME</h4>
                        <span>Lorem ipsum dolor.</span>
                      </div>
                    </div>
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={img2} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>SPONSOR NAME</h4>
                        <span>Lorem ipsum dolor.</span>
                      </div>
                    </div>
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={img2} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>SPONSOR NAME</h4>
                        <span>Lorem ipsum dolor.</span>
                      </div>
                    </div>
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={cocaImg} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>SPONSOR NAME</h4>
                        <span>Lorem ipsum dolor.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sponsors-innerContainer2">
                  <h1>SOCIAL MEDIA PARTNERS</h1>
                  <div className="sponsors-restSpon">
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={img2} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>SPONSOR NAME</h4>
                        <span>Lorem ipsum dolor.</span>
                      </div>
                    </div>
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={img2} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>SPONSOR NAME</h4>
                        <span>Lorem ipsum dolor.</span>
                      </div>
                    </div>
                    <div className="sponsors-sponCard">
                      <div className="sponsors-imgContain">
                        <a href=""><img src={img2} alt="" /></a>
                      </div>
                      <div className="sponsors-sponInfo">
                        <h4>SPONSOR NAME</h4>
                        <span>Lorem ipsum dolor.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
  )
}

export default Sponsors
