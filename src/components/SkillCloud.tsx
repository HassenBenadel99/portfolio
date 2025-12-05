import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  x: number;
  y: number;
  delay: number;
}

const skills: Omit<Skill, 'x' | 'y' | 'delay'>[] = [
  { name: 'JavaScript', size: 'xl' },
  { name: 'TypeScript', size: 'lg' },
  { name: 'React', size: 'xl' },
  { name: 'Node.js', size: 'lg' },
  { name: 'Python', size: 'xl' },
  { name: 'Java', size: 'lg' },
  { name: 'CSS', size: 'md' },
  { name: 'HTML', size: 'md' },
  { name: 'MongoDB', size: 'lg' },
  { name: 'PostgreSQL', size: 'md' },
  { name: 'REST', size: 'lg' },
  { name: 'GraphQL', size: 'md' },
  { name: 'Docker', size: 'md' },
  { name: 'AWS', size: 'lg' },
  { name: 'Git', size: 'md' },
  { name: 'Redux', size: 'sm' },
  { name: 'Next.js', size: 'lg' },
  { name: 'Express', size: 'md' },
  { name: 'Tailwind', size: 'lg' },
  { name: 'SASS', size: 'sm' },
  { name: 'Vue.js', size: 'md' },
  { name: 'Angular', size: 'md' },
  { name: 'Spring Boot', size: 'lg' },
  { name: 'Kotlin', size: 'sm' },
  { name: 'Firebase', size: 'md' },
];

const sizeClasses = {
  sm: 'text-sm opacity-50',
  md: 'text-base opacity-60',
  lg: 'text-xl opacity-80',
  xl: 'text-2xl opacity-100',
};

const SkillCloud = () => {
  const [positionedSkills, setPositionedSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const positioned = skills.map((skill) => ({
      ...skill,
      x: Math.random() * 80 + 10,
      y: Math.random() * 70 + 15,
      delay: Math.random() * 5,
    }));
    setPositionedSkills(positioned);
  }, []);

  return (
    <div className="relative w-full h-[500px]">
      {positionedSkills.map((skill, index) => (
        <span
          key={skill.name}
          className={`absolute skill-tag ${sizeClasses[skill.size]} font-medium transition-all duration-300`}
          style={{
            left: `${skill.x}%`,
            top: `${skill.y}%`,
            animation: `particle-drift ${15 + skill.delay}s ease-in-out infinite`,
            animationDelay: `${skill.delay}s`,
          }}
        >
          {skill.name}
        </span>
      ))}
    </div>
  );
};

export default SkillCloud;
