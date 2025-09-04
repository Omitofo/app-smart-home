import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // 🔒 Sanitiza: elimina etiquetas HTML pero conserva espacios normales
  const sanitizeInput = (value) => {
    return value.replace(/<[^>]*>?/gm, "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: sanitizeInput(value) });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Por favor, escribe tu nombre.";
    if (!formData.email) newErrors.email = "Por favor, escribe tu correo.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Por favor, escribe un correo válido.";
    if (!formData.message)
      newErrors.message = "Por favor, escribe tu mensaje.";
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
    <section className="mt-20 mb-16 max-w-3xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-4">Contáctanos</h2>
      <p className="text-center text-gray-400 mb-10">
        ¿Tienes dudas o sugerencias? Envíanos un mensaje y te responderemos lo antes posible.
      </p>

      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-300 min-h-[380px] flex items-center justify-center">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full">
            {/* Nombre */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Tu nombre completo"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Correo</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="ejemplo@correo.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Mensaje */}
            <div className="mb-6">
              <label className="block mb-1 text-sm font-medium">Mensaje</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Escribe tu mensaje aquí..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-lg font-semibold"
            >
              Enviar mensaje
            </button>
          </form>
        ) : (
          <div className="text-center animate-fadeIn">
            <h3 className="text-2xl font-bold text-green-400 mb-2">
              ✅ ¡Mensaje enviado!
            </h3>
            <p className="text-gray-300">
              Gracias por contactarnos, te responderemos pronto.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
