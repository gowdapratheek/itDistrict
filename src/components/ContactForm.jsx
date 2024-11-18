import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwuGoD7purQDJTC77H_kq1aZUO96qFlb6JNPiAfpDzs6ykalp6eCsDlWf9KH2g_3d9E-g/exec"; // Replace with your Apps Script URL

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams(formData),
      });
      const result = await response.json();
      if (result.result === "success") {
        setResponseMessage("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" }); 
        setTimeout(() => {
          navigate("/"); 
        }, 3000);
      }
    } catch (error) {
      console.error("Error!", error.message);
      setResponseMessage("Submission failed. Please try again.");
    }
  };

  useEffect(() => {
    if (responseMessage === "Form submitted successfully!") {
      // Scroll to the top of the page when the form is successfully submitted
      window.scrollTo(0, 0);
    }
  }, [responseMessage]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full mx-auto p-8 bg-white shadow-lg rounded-lg mt-16 mb-16">
        {responseMessage === "Form submitted successfully!" ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Submitted successfully!
            </h2>
            <p>You will be redirected to the home page shortly...</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-[#00BCFF] mb-6 text-center">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} id="form">
              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  rows="5"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </form>
          </>
        )}
        {responseMessage && (
          <p className="mt-4 text-center text-green-600">{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
