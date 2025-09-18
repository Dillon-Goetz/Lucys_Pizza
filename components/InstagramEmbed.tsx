// src/components/InstagramEmbed.tsx
"use client";

import React, { useEffect } from 'react';

// Define the shape of the 'instgrm' object on the window
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstagramEmbedProps {
  permalink: string; // The full URL to the Instagram post
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ permalink }) => {
  useEffect(() => {
    // If the Instagram script is already available, tell it to process new embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    // If the script isn't on the page, add it
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);

    // Cleanup the script when the component is removed from the page
    return () => {
      document.body.removeChild(script);
    };
  }, [permalink]); // Re-run the effect if the permalink changes

  return (
    <div className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{ maxWidth: '540px', width: '100%' }}
      >
        {/* The content inside is just a fallback and will be replaced by Instagram's script. */}
        <div style={{ padding: '16px' }}>
          <a href={permalink} target="_blank" rel="noopener noreferrer">
            Loading...
          </a>
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;