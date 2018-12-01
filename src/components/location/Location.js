import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.3994079668187!2d55.34985791501008!3d25.22346898388391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f436ae7a97b57%3A0xe34a5b2c59e4f2e1!2sHard+Rock+Cafe!5e0!3m2!1sen!2sse!4v1543640170503" 
        width="100%" 
        height="450" 
        frameBorder="0" 
        allowFullScreen>
      </iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;