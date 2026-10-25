import { useState } from "react";
export default function Contact () {
    // Form style
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '10px' }
  // Data mapping for countries and their states
  const countryData = {
    "USA": ["New York", "California", "Texas"],
    "Canada": ["Ontario", "Quebec", "British Columbia"],
    "UK": ["England", "Scotland", "Wales"],
    "Nigeria": ["Abia", "Adamawa", "Akwa-Ibom", "Anambra", "Bauchi", "Bayesal", "Benue", "Borno","Cross-River", "Delta","Eboyin", "Edo", "Gombe", "Imo", "Jigawa", "kaduna",],
    "France": ["Paris", ],
    "Congo": ["Congo"]
  };


    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      country: '',
      state: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
        // Reset state if the country is changed
        ...(name === 'country' ? { state: '' } : {})
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Final Data:', formData);
    };
    return(
        <>
            <div id="subscribe" className="between_tabs">
                <h4>Be The First To Know About New Music and More</h4>
            
                <div className="contact-form">
                    <form onSubmit={handleSubmit} style={formStyle}>
                        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />

                        {/* Country Selection Dropdown */}
                        <select name="country" value={formData.country} onChange={handleChange} required>
                        <option value="">Select Country</option>
                        {Object.keys(countryData).map(country => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                        </select>

                        {/* State Selection Dropdown (Dependent on Country) */}
                        <select name="state" value={formData.state} onChange={handleChange} disabled={!formData.country} required>
                        <option value="">Select State</option>
                        {formData.country && countryData[formData.country].map(state => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                        </select>
                        <div>
                          <div className="subscribe-check-div">
                            <input type="checkbox" name="subscribe" className="subscribe-check" />
                            <div>
                               <label htmlFor="subscribe">I want to be send me marketing messages about the label. Unsubscribe at any time. Please read our Privacy Policy for more information about how we handle your personal information, including for marketing.</label>
                            </div>
                           
                          </div>
                          <div className="subscribe-check-div">
                            <input type="checkbox" name="number-consent" className="subscribe-check" />
                            <div>
                              <label htmlFor="number-consent">By providing my phone number above, I agree that I am 13+ and agree to receive recurring messages via SMS or Whatsapp from or on behalf of the label.{/* , and agree to Community’s Terms/Privacy: community.com/terms Message frequency varies.*/} Consent is not a condition of Purchase. Message and data rates apply, message help for Help, stop to opt-out.</label>
                            </div>
                            
                          </div>
                        </div>
                        <button type="submit" className='suscribeSubmit fadeInUp'>Submit</button>
                    </form>

                </div>
                <footer className="between_tabs">
                  <div className="cookies">
                    <a href="#"><p>Cookies Settings</p> </a>
                    <p>Creative direction by ojoscreate
                    Website design by <a href="#"><span>ojosceate</span></a></p>
                   </div>
                </footer>
               
            </div>
        </>
    )
}