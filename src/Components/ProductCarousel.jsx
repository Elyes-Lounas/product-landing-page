import Carousel from "react-bootstrap/Carousel";
import pic_1 from "../assets/pic_1.jpg";
import pic_2 from "../assets/pic_2.jpeg";
import pic_3 from "../assets/pic_3.jpeg";
function ProductCarousel() {
  return (
    <div>
      <div className="text-center">
        <h1>حذاء رياضي</h1>
        <h3 className="text-success mt-3">
          <span className="text-dark">سعر: </span>3500 دج
        </h3>
      </div>
      <Carousel className="carousel my-5">
        <Carousel.Item>
          <img src={pic_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={pic_2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={pic_3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
