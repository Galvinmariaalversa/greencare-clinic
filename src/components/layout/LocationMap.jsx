function LocationMap() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11091.706449221565!2d80.13016363184093!3d12.946238976324649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525facdb6445c3%3A0x92e3208787295cf!2sRadha%20Nagar%2C%20Lakshmi%20Nagar%2C%20Chromepet%2C%20Chennai%2C%20Tambaram%2C%20Tamil%20Nadu%20600044!5e0!3m2!1sen!2sin!4v1788180352584!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="GreenCare Clinic Location"
      />
    </div>
  );
}

export default LocationMap;