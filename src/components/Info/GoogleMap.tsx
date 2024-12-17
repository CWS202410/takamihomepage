import React from 'react';

export function GoogleMap() {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.4332468119915!2d135.4433616187661!3d34.79570216229274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f07c09a84a5f%3A0x9eb8d61c1975504a!2z44Gf44GL44G_!5e0!3m2!1sja!2sjp!4v1734156829815!5m2!1sja!2sjp"
        style={{
          border: 0,
          width: '100%',
          height: '100%',
          borderRadius: '8px',
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}