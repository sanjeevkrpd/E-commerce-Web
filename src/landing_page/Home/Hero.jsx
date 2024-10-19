import "./Hero.css";
import { Carousel } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-poppins";
import "typeface-mulish";

function Hero() {
  return  (
    <Container>
      <div className="row d-flex flex-row-reverse align-items-center justify-content-between text-center width-100">
        <div className="col-6 d-flex">
          <img 
            src="https://img.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-during-daytime-against-wall-light-city-building_197531-24468.jpg" 
  srcSet="https://img.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-during-daytime-against-wall-light-city-building_197531-24468.jpg"

            alt="Fashion" 
            style={{ width: '100%' }} 
          />
        </div>
        <div className="col-6">
          <div className="row mt-4">
            <h1>Fall  Winter</h1>
            <h3>Clearance Sale</h3>
            <p>Free Shipping In Delhi And Mumbai</p>
           
          </div>
          <button id='btn'>Start to Shop</button>
          {/* <Button className='btnHero'>Dark</Button> */}
        </div>
      </div>
     
<div className="row">
      <div className='row content'>
        <h1>Summer 23/24 Collection</h1>
        <p>Discover the New Winter Trends and be inspired by our outfit suggestions</p>
      </div>
      <Carousel interval={800} controls={false}>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <img
              className="d-block w-23 carouselImg"
              src="https://assets.vogue.com/photos/60d722ed4b12a701e3d2f0cd/master/w_2560%2Cc_limit/_ALE0456.jpg"
              alt="Slide 1"
            />
            <img
              className="d-block w-23 carouselImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJxwRNlEz-sHIDgofRpdxWzZ9TARFZj61fwFu-_XXWleYY3PGl9JK8opKeekyyNPvf34&usqp=CAU"
              alt="Slide 2"
            />
            <img
              className="d-block w-23 carouselImg"
              src="https://fashionunited.com/r/fit=cover,format=auto,gravity=center,quality=70,width=1164/https://fashionunited.com/img/upload/2024/01/08/fotojet-31-61hdoxxl-2024-01-08.jpeg"
              alt="Slide 3"
            />
            <img
              className="d-block w-23 carouselImg"
              src="https://fashionunited.com/r/fit=cover,format=auto,gravity=center,quality=70,width=1164/https://fashionunited.com/img/upload/2024/01/08/fotojet-32-6zvs6nop-2024-01-08.jpeg" 
              alt="Slide 4"
            />
          </div>
          <Carousel.Caption>
            <h3>Group 1</h3>
            <p>Some text for the first group of images.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <img
              className="d-block w-23 carouselImg"
              src="https://live.texcon.webcore.no/wp-content/uploads/sites/2/2023/07/tendenser-for-herre-var-sommer-2024-texcon.jpg" 
              alt="Slide 5"
            />
            <img
              className="d-block w-23 carouselImg"
              src="https://schonmagazine.com/wp-content/uploads/2023/06/DG_Mens_FashionShow_SS24_BTSPriority_Gallizio-1-scaled.jpg" 
              alt="Slide 6"
            />
            <img
              className="d-block w-23 carouselImg"
              src="https://assets.gqindia.com/photos/5e25699b65e6530008ab9cf3/4:3/w_1440,h_1080,c_limit/DIOR-MEN'S-WINTER-20-21---GROUPSHOT-BY-BRETT-LLOYD-FOR-DIOR.jpg" 
              alt="Slide 7"
            />
            <img
              className="d-block w-23 carouselImg"
              src="https://assets.gqindia.com/photos/5e25699b65e6530008ab9cf3/4:3/w_1440,h_1080,c_limit/DIOR-MEN'S-WINTER-20-21---GROUPSHOT-BY-BRETT-LLOYD-FOR-DIOR.jpg" 
              alt="Slide 8"
            />
          </div>
          <Carousel.Caption>
            <h3>Group 2</h3>
            <p>Some text for the second group of images.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <img
              className="d-block w-23 carouselImg"
              src="https://live.texcon.webcore.no/wp-content/uploads/sites/2/2023/07/tendenser-for-herre-var-sommer-2024-texcon.jpg" 
              alt="Slide 5"
            />
            <img
              className="d-block w-23 carouselImg"
              src="https://schonmagazine.com/wp-content/uploads/2023/06/DG_Mens_FashionShow_SS24_BTSPriority_Gallizio-1-scaled.jpg" 
              alt="Slide 6"
            />
            <img
              className="d-block w-23 carouselImg"
              src="https://assets.gqindia.com/photos/5e25699b65e6530008ab9cf3/4:3/w_1440,h_1080,c_limit/DIOR-MEN'S-WINTER-20-21---GROUPSHOT-BY-BRETT-LLOYD-FOR-DIOR.jpg" 
              alt="Slide 7"
            />
            <img
              className="d-block w-23 carouselImg"
              src="https://assets.gqindia.com/photos/5e25699b65e6530008ab9cf3/4:3/w_1440,h_1080,c_limit/DIOR-MEN'S-WINTER-20-21---GROUPSHOT-BY-BRETT-LLOYD-FOR-DIOR.jpg" 
              alt="Slide 8"
            />
          </div>
          <Carousel.Caption>
            <h3>Group 2</h3>
            <p>Some text for the second group of images.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <img
              className="d-block w-23 carouselImg"
              src="https://live.texcon.webcore.no/wp-content/uploads/sites/2/2023/07/tendenser-for-herre-var-sommer-2024-texcon.jpg" 
              alt="Slide 5"
            />
            <img
              className="d-block w-23 carouselImg"
              src="https://schonmagazine.com/wp-content/uploads/2023/06/DG_Mens_FashionShow_SS24_BTSPriority_Gallizio-1-scaled.jpg" 
              alt="Slide 6"
            />
            <img
              className="d-block w-23 carouselImg"
              src="https://assets.gqindia.com/photos/5e25699b65e6530008ab9cf3/4:3/w_1440,h_1080,c_limit/DIOR-MEN'S-WINTER-20-21---GROUPSHOT-BY-BRETT-LLOYD-FOR-DIOR.jpg" 
              alt=""
            />
            <img
              className="d-block w-23 carouselImg"
              src="https://assets.gqindia.com/photos/5e25699b65e6530008ab9cf3/4:3/w_1440,h_1080,c_limit/DIOR-MEN'S-WINTER-20-21---GROUPSHOT-BY-BRETT-LLOYD-FOR-DIOR.jpg" 
              alt="Slide 8"
            />
          </div>
          <Carousel.Caption>
            <h3>Group 2</h3>
            <p>Some text for the second group of images.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Add more Carousel.Items as needed */}
      </Carousel>
      <div className="row">
        <h2>Our Hot Sale in 2024</h2>
      </div>
    </div>



    </Container>
  );
}

export default Hero;
