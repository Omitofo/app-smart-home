import { useState } from "react";
import contactImage from "../assets/roboto5.jpg"; // replace with your image

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const sanitizeInput = (value) => value.replace(/<[^>]*>?/gm, "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: sanitizeInput(value) });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Please enter your name.";
    if (!formData.email) newErrors.email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.message) newErrors.message = "Please enter your message.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section className="mt-20 mb-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
      <p className="text-center text-gray-400 mb-10">
        Do you have any questions or suggestions? Send us a message and we will get back to you as soon as possible.
      </p>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[400px]">
        {/* Left column: image */}
        <div className="lg:w-1/2 h-64 lg:h-auto">
          <img
            src={contactImage}
            alt="Contact Us Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right column: form */}
        <div className="lg:w-1/2 p-8 flex items-center justify-center">
          <div className="w-full">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="w-full">
                {/* Name */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block mb-1 text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Write your message here..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center animate-fadeIn">
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  ✅ Message Sent!
                </h3>
                <p className="text-gray-300">
                  Thank you for reaching out, we’ll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
