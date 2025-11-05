import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYyMTE4OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "Brand Identity",
      category: "Design & Strategy",
      image: "https://images.unsplash.com/photo-1635182473361-1f72e7b4be83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjBzdHVkaW98ZW58MXx8fHwxNzYyMTI0Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-pink-600 to-orange-600"
    },
    {
      id: 3,
      title: "Mobile App",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIxOTAyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-cyan-600 to-teal-600"
    }
  ];

  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600">Some of our recent projects</p>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 mix-blend-multiply group-hover:opacity-40 transition-opacity`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-sm mb-2 opacity-90">{project.category}</span>
                <h3 className="text-3xl mb-4">{project.title}</h3>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Project</span>
                  <ExternalLink size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
