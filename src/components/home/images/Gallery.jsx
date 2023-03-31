import "./gallery.scss";

export default function Gallery() {
  return (
    <div className='gallery'>
      <div className='container'>
        <div className='image-top'>
          <div className='image-1'>
            <img
              src='./images/home-service-1.jpg'
              alt=''
              className='img-fluid'
            />
          </div>
          <div className='red-overlay'></div>
        </div>
        <div className='image-bottom d-flex mt-5'>
          <div className='image-2'>
            <img
              src='./images/home-service-3.jpg'
              alt=''
              className='img-fluid'
            />
            <h2>some ttet</h2>
          </div>
          <div className='image-3'>
            <img
              src='./images/home-service-2.jpg'
              alt=''
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
