export const Contact = () => {
      const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent form from reloading the page
        const formData = new FormData(event.target); // Capture form data
        const formInputData = Object.fromEntries(formData.entries()); // Convert form data to an object
        console.log(formInputData); // Log the form data to check values
      };
    
      return (
        <section className="section-contact">
          <h2 className="container-title">Contact us</h2>
          <div className="contact-wrapper container">
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Enter your name"
                name="Username"
                autoComplete="off"
              />
    
              <input
                type="email"
                className="form-control"
                required
                placeholder="Enter your email"
                name="Email"
                autoComplete="off"
              />
    
              <textarea
                className="form-control"
                rows="10"
                required
                placeholder="Enter your message"
                name="Message"
                autoComplete="off"
              ></textarea>
    
              <button className="btn1" type="submit" value="send">
                Send
              </button>
            </form>
          </div>
        </section>
      );
    };
    