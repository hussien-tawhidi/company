import "./gallery.scss";

export default function Gallery() {
  return (
    <div className='gallery pt-5'>
      <div className='container my-5 pt-5'>
        <div className='image-top d-flex align-items-end justify-content-lg-between justify-content-md-between justify-content-sm-around'>
          <div className='image-1'>
            <img
              src='./images/home-service-1.jpg'
              alt=''
              className='img-fluid'
            />
          </div>
          <img
            src='./images/home-service-4.jpg'
            alt=''
            className='img-fluid image-4'
          />
        </div>
        <div className='image-bottom d-flex'>
          <div className='image-2'>
            <img
              src='./images/home-service-3.jpg'
              alt=''
              className='img-fluid'
            />
            <div className='texts'>
              <div className='content text-secondary'>
                <h6 className='title h3'>Satisfaction </h6>
                <p>
                  we are alway try our best that our website be cool, safety,
                  and modern{" "}
                </p>
              </div>
            </div>
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
