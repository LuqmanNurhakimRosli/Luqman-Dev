import PropTypes from 'prop-types';

export default function ProjectCard({ name, description, techused, link }) {
  return (
    <div className="bg-black text-white border border-gray-300 rounded-lg shadow-lg p-5 pb-5 relative overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl flex flex-col h-full">
      <div>
        <h3 className="text-2xl font-semibold mb-3">{name}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <p className="text-gray-400">{techused}</p>
      </div>

      {/* Button now properly spaced at bottom-left */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 self-start bg-white text-black py-3 px-6 rounded-full flex items-center space-x-2 transition-all duration-500 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)]"
      >
        <span>→</span>
        <span>Take me there</span>
      </a>
    </div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  techused: PropTypes.string,
  link: PropTypes.string,
};
