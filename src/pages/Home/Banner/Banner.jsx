import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../public/banner/bg.jpg';
import img2 from '../../../../public/banner/2.jpg';
import img3 from '../../../../public/banner/3.jpg';
import img4 from '../../../../public/banner/4.jpg';
import img5 from '../../../../public/banner/5.jpg';
import img6 from '../../../../public/banner/6.jpg';

const Banner = () => {
    return (
        <div>
             <Carousel className='w-full h-20'>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;