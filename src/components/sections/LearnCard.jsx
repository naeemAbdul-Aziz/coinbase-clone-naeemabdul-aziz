import React from 'react';

const LearnCard = ({ title, description, image, href, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="block rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">{label}</span>
      <h3 className="text-lg font-bold mt-1 mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </a>
);

export default LearnCard;
