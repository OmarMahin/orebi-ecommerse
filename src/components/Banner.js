import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import Image from './Image';

const Banner = () => {

    let [currentBannerIndex, setCurrentBannerIndex] = useState(0)

    const settings = {
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prevIndex, nextIndex)=>{
            setCurrentBannerIndex(nextIndex)
        },
        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "4%",
                    transform: "TranslateY(-50%)"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: (currentIndex) => (
            <div
            
            style={

                currentBannerIndex == currentIndex ?
                {
                    borderRight: "3px solid #262626",
                    padding: "10px 5px",
                }:
                {
                    borderRight: "3px solid white",
                    padding: "10px 5px",
                    color: "transparent"
                }

                
            }

            >
                0{currentIndex + 1}
            </div>
        ),
        responsive: [
            {
              breakpoint: 576,
              settings: {
                dots: true,
                appendDots: dots => (
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "2%",
                            transform: "TranslateY(-50%)"
                        }}
                    >
                        <ul style={{ margin: "0px" }}> {dots} </ul>
                    </div>
                ),
                customPaging: (currentIndex) => (
                    <div
                    
                    style={
        
                        currentBannerIndex == currentIndex ?
                        {
                            borderRight: "2px solid #262626",
                            padding: "0px 2px",
                            fontSize: "12px"
                        }:
                        {
                            borderRight: "2px solid white",
                            padding: "0px 2px",
                            fontSize: "12px",
                            color: "transparent"
                        }
        
                        
                    }
        
                    >
                        0{currentIndex + 1}
                    </div>
                )
              }
            }
          ]
    }


    return (
        <Slider {...settings}>

            <div>
                <Link to="#">
                    <Image source={'Banner.png'}></Image>
                </Link>

            </div>
            <div>
            <Link to="#">
                    <Image source={'Banner.png'}></Image>
                </Link>
            </div>
            <div>
            <Link to="#">
                    <Image source={'Banner.png'}></Image>
                </Link>
            </div>

        </Slider>
    )
}

export default Banner