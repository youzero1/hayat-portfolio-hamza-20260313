'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const skillCategories = [
  {
    name: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    borderColor: 'border-blue-100 dark:border-blue-900',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
      { name: 'React Native', level: 70 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    borderColor: 'border-purple-100 dark:border-purple-900',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / FastAPI', level: 82 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    name: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    borderColor: 'border-orange-100 dark:border-orange-900',
    skills: [
      { name: 'Docker / Kubernetes', level: 82 },
      { name: 'AWS / GCP', level: 78 },
      { name: 'Git & CI/CD', level: 92 },
      { name: 'Linux / Bash', level: 80 },
      { name: 'Terraform', level: 65 },
    ],
  },
];

const techIcons = [
  { name: 'React', emoji: '⚛️' },
  { name: 'Next.js', emoji: '▲' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'Node.js', emoji: '🟢' },
  { name: 'Python', emoji: '🐍' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'PostgreSQL', emoji: '🐘' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'AWS', emoji: '☁️' },
  { name: 'Git', emoji: '🔀' },
  { name: 'GraphQL', emoji: '◈' },
  { name: 'Linux', emoji: '🐧' },
];

export default function SkillsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Expertise</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Skills & Technologies</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I work with to build exceptional digital experiences.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className={`card p-6 ${category.bgColor} border ${category.borderColor}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold">{category.name}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-xs font-semibold text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Icons Grid */}
          <div className="card p-8">
            <h3 className="text-center text-lg font-semibold mb-8 text-gray-600 dark:text-gray-400">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {techIcons.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200 border border-gray-200 dark:border-gray-700">
                    {tech.emoji}
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
