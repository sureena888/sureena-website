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
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-6">
            Hi, I'm Sureena, a passionate software developer with a diverse skill set and a love for solving complex problems. Throughout my experience in software development, I’ve come to appreciate the importance of clear, robust technical documentation, a realization that became especially evident while working with the WiX framework to build installers for software products. It was then that I recognized how well-structured documentation can make products more understandable and accessible. Alongside my development skills, I focus on simplifying technology through thoughtful documentation. I'm particularly excited about leveraging AI methodologies and tools to make technology even more accessible to a broader audience. By integrating AI technologies like machine learning and natural language processing into my development process, I aim to improve both the way solutions are built and how they are experienced by users.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}