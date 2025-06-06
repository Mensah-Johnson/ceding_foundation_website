import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Donate - Ceding Foundation",
  description:
    "Support our mission by making a donation to help children and communities in need",
};

export default function Donate() {
  return (
    <>
      <Header />
      <main>
        <section className="leadership-hero">
          <div className="hero-content">
            <h1 className="text-4xl font-bold pb-3 text-center leading-tight">
              Make a Difference Today
            </h1>
            <p>
              Your donation helps us continue our mission of serving those in
              need
            </p>
          </div>
        </section>

        <section className="donate-section">
          <div className="container">
            <div className="donate-content">
              <div className="momo-info">
                <h3>Mobile Money Donations</h3>
                <p>
                  You can easily donate using Mobile Money. Follow these simple
                  steps:
                </p>
                <ol>
                  <li>Dial your Mobile Money USSD code</li>
                  <li>Select "Send Money" or "Transfer"</li>
                  <li>
                    Enter our donation number: <strong>0556690799</strong>
                  </li>
                  <li>Enter your donation amount</li>
                  <li>Complete the transaction with your PIN</li>
                </ol>

                <h4>Supported Networks:</h4>
                <ul>
                  <li>MTN Mobile Money</li>
                  <li>Vodafone Cash</li>
                  <li>AirtelTigo Money</li>
                </ul>

                <div className="contact-info" style={{ marginTop: "2rem" }}>
                  <h4>For more information:</h4>
                  <p>
                    <strong>Phone:</strong> +233 545256587 / +233 554508596
                  </p>
                  <p>
                    <strong>Email:</strong> cedingfoundation@gmail.com
                  </p>
                </div>
              </div>

              <div className="donate-form">
                <h3>Donation Information</h3>
                <p>
                  Every donation, no matter the size, makes a real difference in
                  the lives of those we serve.
                </p>

                <div className="impact-info">
                  <h4>Your Impact</h4>
                  <p>
                    With your support, we have been able to reach over 1000
                    children and families across Ghana. Your donation directly
                    funds our programs in education, healthcare, and 
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
