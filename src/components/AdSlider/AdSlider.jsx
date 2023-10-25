import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class AdSlider extends Component {
    render() {
        return (
            <div>
                <Carousel autoPlay infiniteLoop>
                    <div>
                        <img src="/bmw.png" />
                        <p className="legend">BMW M3</p>
                    </div>
                    <div>
                        <img src="/BMW_X3.png" />
                        <p className="legend">BMW X3</p>
                    </div>
                    <div>
                        <img src="/BMW_X5.png" />
                        <p className="legend">BMW 5X</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default AdSlider;
