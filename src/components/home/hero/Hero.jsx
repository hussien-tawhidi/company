import "./hero.scss";
export default function Hero() {
  return (
    <div className='container-lg'>
      <div className='hero'>
  
        <div className='hero-img'>
          <img src='./images/members_map_5.png' alt='' className='img-fluid' />
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-3'>
            <div className='sm-title'>
              <div className='sm-title-1'>
                {" "}
                <p>the prettiest</p>
                <p>and unique websites</p>
              </div>
              <div className='sm-title-2'>
                <p>seo</p>
                <p>be on the first of google</p>
              </div>
            </div>
          </div>
          <div className='col-lg-8 col-md-9  col-sm-12'>
            <div className='lg-title'>
              <div className='titles'>
                <h1 className='text-uppercase title'>beautiful</h1>
                <h2 className='h1 text-uppercase title'>
                  <span className='text-secondary'>and</span> safety
                </h2>
                <h3 className='h1 text-uppercase title'>
                  we<span className='stroke'>bsit</span>es
                </h3>
              </div>
              <p className='mt-5'>
                We are working commonly on web development but also work on
                mobile app, or descktop app. Our designer are professional and
                thier design are unique and beautiful. If your want to work with
                professionals contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
