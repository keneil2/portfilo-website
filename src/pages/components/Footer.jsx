export default function Footer() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <p className="text-center mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:keneilsamms23@gmail.com" className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/keneil-samms-0137b0232/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

