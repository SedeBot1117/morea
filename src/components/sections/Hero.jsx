function Hero() {
  return (
    <section className="pt-[104px] pb-16 bg-gradient-to-b from-blue-50 to-white"> {/* 40px (banner) + 64px (navbar) = 104px */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <div className="text-blue-600 font-semibold mb-4">
            MEDICAL-GRADE TECHNOLOGY
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Revolutionary
            <br />
            <span className="text-blue-600">Neck Therapy</span>
            <br />
            At Home
          </h1>
          {/* Rest of your Hero content */}
        </div>
      </div>
    </section>
  );
}

export default Hero; 