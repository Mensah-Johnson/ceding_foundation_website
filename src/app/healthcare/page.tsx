import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Healthcare Access - Ceding Foundation",
  description:
    "Ensuring comprehensive healthcare and medical support for every child",
};

export default function Healthcare() {
  return (
    <>
      <Header />
      <main>
        <section className="education-hero">
          <div className="hero-content">
            <h1>Healthcare Access</h1>
            <p>
              Ensuring comprehensive healthcare and medical support for every
              child
            </p>
          </div>
        </section>

        <section className="education-overview">
          <div className="container">
            <h2>Our Healthcare Programs</h2>
            <p>
              At Ceding Foundation, we believe that every child deserves access
              to quality healthcare. Our comprehensive healthcare programs
              ensure that children receive the medical attention and support
              they need to thrive.
            </p>

            <div className="education-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Medical Checkups</p>
              </div>
              <div className="stat-item">
                <h3>200+</h3>
                <p>Vaccinations</p>
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <p>Specialist Consultations</p>
              </div>
            </div>
          </div>
        </section>

        <section className="programs-section">
          <div className="container">
            <h2>Our Healthcare Initiatives</h2>
            <div className="programs-grid">
              <div className="program-card">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                  alt="Regular Checkups"
                />
                <h3>Regular Checkups</h3>
                <p>
                  Scheduled medical examinations to monitor children's health
                  and development.
                </p>
              </div>
              <div className="program-card">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
                  alt="Vaccination Programs"
                />
                <h3>Vaccination Programs</h3>
                <p>
                  Essential immunizations to protect children from preventable
                  diseases.
                </p>
              </div>
              <div className="program-card">
                <img
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e"
                  alt="Nutrition Support"
                />
                <h3>Nutrition Support</h3>
                <p>
                  Balanced meal programs and nutrition education for healthy
                  development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <h2>Get in Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>WAB,22,WADIE ADWUMAKASE,NEAR METHODIST CHURCH,KUMASI,Kwabre East,ASHANTI,Ghana</p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <p>+233 545256587/ +233 554508596</p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <p>cedingfoundation@gmail.com</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
