import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // Initialize EmailJS with your public key globally
    emailjs.init("hsT-YdfyCYNZ_w_aR");

    if (isSuccess) {
      window.scrollTo(0, 0);
    }
  }, [isSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // EmailJS keys from your dashboard
    const SERVICE_ID = "service_bf2djar";
    const TEMPLATE_ID = "template_0yhfzmp";

    setLoading(true);
    setResponseMessage("");
    setIsSuccess(false);

    try {
      const templateParams = {
        name: formData.name,
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {
        setIsSuccess(true);
        setResponseMessage("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsSuccess(false);
      // Give more specific feedback if it's an EmailJS error
      if (error && error.text) {
        setResponseMessage(`Email sending failed: ${error.text}`);
      } else {
        setResponseMessage("Submission failed. Please check your EmailJS dashboard and credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full mx-auto p-8 bg-white shadow-lg rounded-lg mt-16 mb-16">
        {isSuccess ? (
          <div className="text-center font-bold">
            <h2 className="text-2xl mb-4 text-green-600">
              Submitted successfully!
            </h2>
            <p className="text-gray-600">You will be redirected to the home page shortly...</p>
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
                disabled={loading}
                className={`w-full p-3 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out ${loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </>
        )}
        {responseMessage && !isSuccess && (
          <p className="mt-4 text-center text-red-600">{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
