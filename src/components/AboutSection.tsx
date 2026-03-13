'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'GraphQL', 'REST APIs',
  'Tailwind CSS', 'Git', 'CI/CD', 'Agile',
];

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">About</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-3xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                    <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-3 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💼</span>
                    <div>
                      <div className="text-xs text-gray-500">Experience</div>
                      <div className="text-sm font-bold">5+ Years</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-3 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <div className="text-xs text-gray-500">Projects</div>
                      <div className="text-sm font-bold">50+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Crafting Digital Experiences with{' '}
                <span className="gradient-text">Passion</span>
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m a Full Stack Developer with over 5 years of experience building modern web applications. 
                I specialize in creating high-performance, scalable solutions using cutting-edge technologies.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey started with a Computer Science degree and grew through building everything from 
                small startups to enterprise-scale systems. I love solving complex problems and turning ideas 
                into elegant, user-friendly products.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me contributing to open source, writing technical 
                articles, or exploring the latest advancements in AI and cloud computing.
              </p>

              {/* Skills Tags */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-900 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { number: '50+', label: 'Projects' },
                  { number: '5+', label: 'Years Exp.' },
                  { number: '30+', label: 'Happy Clients' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                    <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
