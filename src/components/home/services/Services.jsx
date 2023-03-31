import "./services.scss";
export default function Services() {
  return (
    <div className='home-service'>
      <div className='container'>
        <div className="service-title">
          <h5>Features</h5>
        </div>
        <div className='row'>
          <div className='col-md-4 col-12'>
            <div className='single'>
              <div className='image-icon my-2'>
                <img
                  src='./images/service-image.png'
                  alt=''
                  className='img-fluid'
                />
              </div>
              <div className='texts'>
                <h3 className='h1 my-2'>
                  Importance Beauty & User Interface in your websites
                </h3>
                <p className='text-secondary'>
                  Beauty and well user interface are extremly important in
                  websites. users must feel well when use your website
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <div className='single'>
              <div className='image-icon my-2'>
                <img
                  src='./images/service-image1.png'
                  alt=''
                  className='img-fluid'
                />
              </div>
              <div className='texts'>
                <h3 className='h1 my-2'>
                  Importance Beauty & User Interface in your websites
                </h3>
                <p className='text-secondary'>
                  Beauty and well user interface are extremly important in
                  websites. users must feel well when use your website
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <div className='single'>
              <div className='image-icon my-2'>
                <img
                  src='./images/service-image2.png'
                  alt=''
                  className='img-fluid'
                />
              </div>
              <div className='texts'>
                <h3 className='h1 my-2'>
                  Importance Beauty & User Interface in your websites
                </h3>
                <p className='text-secondary'>
                  Beauty and well user interface are extremly important in
                  websites. users must feel well when use your website
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
