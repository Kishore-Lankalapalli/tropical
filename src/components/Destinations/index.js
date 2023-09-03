import {AiFillStar} from 'react-icons/ai'
import './index.css'

const Destinations = () => (
  <div className="destinations-blog-container">
    <h1 className="our-destinations-heading"> Our Destinations</h1>
    <div className="slider-universities-images-container">
      <div className="university-card-container">
        <img
          className="university-image"
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693649624/card-image_pkbywe.png"
        />
        <div className="university-footer-container">
          <h1 className="university-name-text">Harvard University</h1>
          <div className="university-detail-container">
            <p className="university-address-text">
              Cambridge,Massachusettie ,UK
            </p>
            <button className="detail-button">
              <img
                className="dot-image"
                src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693650354/Icons_x630gg.png"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="university-card-container">
        <img
          className="university-image"
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693651436/card-image_5_hcz3tk.png"
        />
        <div className="university-footer-container">
          <h1 className="university-name-text"> Oxford University</h1>
          <div className="university-detail-container">
            <p className="university-address-text">Oxford ,England</p>
            <button className="detail-button">
              <img
                className="dot-image"
                src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693650354/Icons_x630gg.png"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="university-card-container">
        <img
          className="university-image"
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693649641/card-image_2_fdjghc.png"
        />
        <div className="university-footer-container">
          <h1 className="university-name-text">Stanford University</h1>
          <div className="university-detail-container">
            <p className="university-address-text">Stanford ,California</p>
            <button className="detail-button">
              <img
                className="dot-image"
                src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693650354/Icons_x630gg.png"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="university-card-container">
        <img
          className="university-image"
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693649653/card-image_3_rqytgj.png"
        />
        <div className="university-footer-container">
          <h1 className="university-name-text">
            Nanyang Technological University
          </h1>
          <div className="university-detail-container">
            <p className="university-address-text">Nanyang ,Singapore</p>
            <button className="detail-button">
              <img
                className="dot-image"
                src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693650354/Icons_x630gg.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="pagination-arrow-container">
      <img
        className="arrow-icon"
        src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693652419/Vector_wdsv7f.png"
      />
      <p className="pagination-text">2 / 140</p>
      <img
        className="arrow-icon"
        src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693652415/Vector_1_h3qiu5.png"
      />
    </div>
  </div>
)

export default Destinations
