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
              Hi, I'm Sureena, a passionate software developer with a diverse skill set and a love for creating innovative solutions. My expertise spans across various aspects of software development, allowing me to bring ideas to life through efficient and scalable code. I excel at integrating AI technologies like machine learning models and natural language processing tools to develop smarter, more intuitive applications. By leveraging these cutting-edge AI capabilities, I enhance both the development process and the end-user experience in my projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}