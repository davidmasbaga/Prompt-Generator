import React from 'react';
import marketingPrompts from '../data/marketing_prompts'; // Ajusta la ruta al lugar correcto

const Badges = (prompt) => {
  // Mapeo de categorías a clases de color
  const categoryColors = {
    "Content Creation": "bg-lime-200",
    "SEO": "bg-gray-200",
    "Web Design": "bg-red-200",
    "Analytics": "bg-green-400",
    "Social Media Marketing": "bg-yellow-200",
    "Branding": "bg-cyan-200",
    "Email Marketing": "bg-purple-200",
    "Creative Strategy": "bg-pink-400",
    "General Marketing": "bg-blue-200",
    "Advertising":"bg-orange-200" // Añade un color para 'General Marketing' si lo necesitas
  };

  return (
    <div>

        
     <span
     key={prompt.No}
     className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ${categoryColors[prompt.color]} dark:text-black`}
     >
          {prompt.content}
        </span>
      
    </div>
  );
};

export default Badges;
