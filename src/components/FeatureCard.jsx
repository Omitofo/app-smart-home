const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-700 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-center">{description}</p>
  </div>
);

export default FeatureCard;
