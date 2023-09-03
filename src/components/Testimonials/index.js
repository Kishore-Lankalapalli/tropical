import './index.css'

const Testimonials = () => (
  <div className="testimonials-container">
    <h1 className="testimonials-heading-text">Testimonials</h1>
    <div className="student-testimonials-container">
      <div className="student-testimonial-card-container">
        <img
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693674717/Ellipse_1_3_eqrjzu.png"
          className="testimonial-student-image"
        />
        <h1 className="testimonial-student-name">Corey Korsgaard</h1>
        <p className="testimonial-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="student-testimonial-card-container">
        <img
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693674724/Avatar_3_vryezf.png"
          className="testimonial-student-image"
        />
        <h1 className="testimonial-student-name">Jakob Aminoff</h1>
        <p className="testimonial-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="student-testimonial-card-container">
        <img
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693674728/Avatar_4_ytpf0n.png"
          className="testimonial-student-image"
        />
        <h1 className="testimonial-student-name">Carla Press</h1>
        <p className="testimonial-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
  </div>
)

export default Testimonials
