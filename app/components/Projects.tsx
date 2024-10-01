import Image from 'next/image'

const projects = [
  {
    title: "Cursor Advanced Features Technical Documentation",
    description: "I created a technical documentation website for Cursor's advanced features using Next.js and Tailwind CSS due to lack of resources provided by Cursor.",
    image: "/technical-documentation.png",
    link: "https://cursor-advanced-features-documentation.vercel.app/"
  },
  {
    title: "AI Chatbot",
    description: "I built an AI chatbot using TypeScript and the OpenAI API. It uses natural language processing to understand and respond to user queries.",
    image: "/ai-chatbot.png",
    link: "https://aichatbot-mocha.vercel.app/"
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}