import './index.css'

const TropicalAdventure = () => (
  <div className="tropical-adventures-container">
    <div className="student-details-container">
      <div className="student-card-container">
        <img
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693622096/avatar_crxgtf.png"
          className="student-image"
        />
        <div>
          <h1 className="student-name">Jenny Wilson</h1>
          <p className="student-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing...
          </p>
        </div>
      </div>

      <div className="student-card-container">
        <img
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693622085/avatar_1_ktu5im.png"
          className="student-image"
        />
        <div>
          <h1 className="student-name">Jenny Wilson</h1>
          <p className="student-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing...
          </p>
        </div>
      </div>

      <div className="student-card-container">
        <img
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693622091/avatar_2_o2vtax.png"
          className="student-image"
        />
        <div>
          <h1 className="student-name">Jenny Wilson</h1>
          <p className="student-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing...
          </p>
        </div>
      </div>
    </div>
    <div className="tropical-adventures-description-container">
      <h1 className="tropical-adventures-heading-text">
        Tropical Adventure{' '}
        <span className="for-students-span-text">for Students. </span>
      </h1>
      <p className="student-vacation-text">
        Student Tropical Vacation: Relax and Recharge
      </p>
      <ul className="description-list-container">
        <li>Lorem ipsum dolor sit amet</li>
        <li> Massa quis natoque sit quam</li>
        <li>Eros non pellentesque elit</li>
        <li>tortor id euismod habitant</li>
        <li>Sed suspendisse id in ultrices</li>
      </ul>
      <button className="explore-more-button">Explore More</button>
    </div>
  </div>
)

export default TropicalAdventure
