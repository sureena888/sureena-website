import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 max-w-xs mx-auto">
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
              Hi, I'm Sureena Hukkoo, a passionate software developer with a diverse skill set and a love for creating innovative solutions. My expertise spans across various aspects of software development, allowing me to bring ideas to life through efficient and scalable code.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Proficient in Python, Java, C++, JavaScript, HTML, and CSS</li>
                  <li>Experienced with Agile, Scrum, and DevOps methodologies</li>
                  <li>Skilled in systems design and architecture</li>
                  <li>Knowledgeable in SQL and NoSQL databases</li>
                  <li>Proficient with Git for version control</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Additional Competencies</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Expert in debugging and automated testing</li>
                  <li>Experienced with cloud services (AWS, Azure, Google Cloud)</li>
                  <li>Well-versed in secure coding practices</li>
                  <li>Skilled in API development and integration</li>
                  <li>Committed to continuous learning and improvement</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Leadership Experience</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Served as President of the Xi Omicron chapter of the Delta Zeta Sorority,demonstrating strong organizational and interpersonal skills</li>
                <li>Led initiatives to improve member engagement, retention and community outreach</li>
                <li>Developed and implemented strategies to enhance the sorority's academic performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}