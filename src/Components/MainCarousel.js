import React from "react";
import Carousel from "better-react-carousel";

import pic1 from "../ArtAssets/photo250/artPiece1x250.png";
import pic2 from "../ArtAssets/photo250/artPiece2x250.png";
import pic3 from "../ArtAssets/photo250/artPiece3x250.png";
import pic4 from "../ArtAssets/photo250/artPiece4x250.png";

const picArray = [pic1,pic2,pic3,pic4];

class MainCarousel extends React.Component {
  constructor(props) {
    super(props);

    // For Later.
    this.state = {
      pictures: this.props.sendPic,
      name: this.props.sendName,
      date: this.props.sendDate,
      desc: this.props.sendDesc,
      star: this.props.sendStar,
    };
  }

  render() {
    const { picutre, name, date, desc, star } = this.state; // Will be used later.

    const label = "Main";

    return (
      <section id="MainCarouselSection">
        <Carousel
          id={label + "CarouselContainer"}
          cols={1}
          rows={1}
          gap={10}
          autoplay={3000}
          loop
        >
            <Carousel.Item>
                <img src={picArray[0]}></img>
                <h1>SallyG</h1>
                <p>01/01/01</p>
                <h2>Love my art work and room set up</h2>
                <p>5 Stars</p>
            </Carousel.Item>
            <Carousel.Item>
                <img src={picArray[1]}></img>
                <h1>ChloeG</h1>
                <p>01/01/01</p>
                <h2>Second Purchaase, now a day love it! Canvas and oak frame bring out the authenticty of....</h2>
                <p>5 Stars</p>
            </Carousel.Item>
            <Carousel.Item>
                <img src={picArray[2]}></img>
                <h1>MaryG</h1>
                <p>01/01/01</p>
                <h2>Best Art of my life. Super happy overall.</h2>
                <p>5 Stars</p>
            </Carousel.Item>
            <Carousel.Item>
                <img src={picArray[3]}></img>
                <h1>GeanieG</h1>
                <p>01/01/01</p>
                <h2>I cant wait to see what else is on offer. Super excited.</h2>
                <p>5 Stars</p>
            </Carousel.Item>

        </Carousel>
        </section>
    );
  }
}

export default MainCarousel;
