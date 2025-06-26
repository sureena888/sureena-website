import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/4 max-w-xs mx-auto md:-mt-8">
            <div className="relative aspect-square">
              <Image
                src="/headshot.JPEG"
                alt="Sureena Hukkoo"
                fill
                className="rounded-full shadow-lg object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-6">
            Hi, I'm Sureena, a passionate software developer with expertise in full-stack development and a strong foundation in modern web technologies. I specialize in building scalable applications using React, Node.js, and cloud platforms, with particular experience in creating robust software solutions. My technical background includes working with complex frameworks like Angular, .NET and infrastructure for software deployment and installer development, where I've gained deep insights into system architecture and deployment strategies. I'm proficient in multiple programming languages and frameworks, with a focus on creating efficient, maintainable code that solves real-world problems. I'm particularly excited about emerging technologies, especially AI and machine learning, and how they can be integrated into modern software solutions to create more intelligent and user-friendly applications. My approach combines technical excellence with innovative problem-solving to deliver high-quality software products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}