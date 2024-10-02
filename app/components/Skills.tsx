export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <ul className="list-disc list-inside space-y-2">
                <li>Basic knowledge of AI concepts and machine learning frameworks</li>
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
                  <li>Leverage AI-powered tools like Cursor to enhance coding efficiency and productivity</li>
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
                <li>Served as President of the Xi Omicron chapter of the Delta Zeta Sorority, demonstrating strong organizational and interpersonal skills</li>
                <li>Led initiatives to improve member engagement, retention and community outreach</li>
                <li>Developed and implemented strategies to enhance the sorority's academic performance</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}