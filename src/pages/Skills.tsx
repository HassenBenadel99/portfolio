import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';

interface SkillItem {
  name: string;
  file: string;
}

interface SkillCategory {
  id: string;
  label: string;
  color: string;
  iconPath: string;
  items: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    color: '#3B82F6', // Blue
    iconPath: '/images/languages',
    items: [
      { name: 'Java', file: 'java.png' },
      { name: 'Python', file: 'python.png' },
      { name: 'TypeScript', file: 'typescript.png' },
      { name: 'C#', file: 'c-sharp.png' },
      { name: 'HTML5', file: 'html-5.png' },
      { name: 'CSS3', file: 'css-3.png' },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    color: '#10B981', // Emerald
    iconPath: '/images/frameworks',
    items: [
      { name: 'React', file: 'react.png' },
      { name: 'Angular', file: 'angular.png' },
      { name: 'Spring Boot', file: 'springboot.png' },
      { name: 'Bootstrap', file: 'bootstrap.png' },
    ],
  },
  {
    id: 'db',
    label: 'Databases',
    color: '#F59E0B', // Amber
    iconPath: '/images/db',
    items: [
      { name: 'PostgreSQL', file: 'postgre.png' },
      { name: 'MySQL', file: 'mysql.png' },
      { name: 'Oracle', file: 'oracle.png' },
      { name: 'MongoDB', file: 'mongodb.png' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    color: '#EF4444', // Red
    iconPath: '/images/devops',
    items: [
      { name: 'Docker', file: 'docker.png' },
      { name: 'Git', file: 'git.png' },
      { name: 'Jenkins', file: 'jenkins.png' },
      { name: 'SonarQube', file: 'sonarqube.png' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    color: '#8B5CF6', // Violet
    iconPath: '/images/tools',
    items: [
      { name: 'Azure', file: 'azure.png' },
      { name: 'Kafka', file: 'kafka.png' },
      { name: 'Selenium', file: 'selenium.png' },
    ],
  },
];

const Skills = () => {
  // Layout Configuration: 2 Top, 3 Bottom

  const categoryConfig = [
    // Top Row (2 items)
    { ...categories[0], top: 20, left: 30 },   // Languages
    { ...categories[1], top: 20, left: 70 },   // Frameworks

    // Bottom Row (3 items)
    { ...categories[2], top: 80, left: 20 },   // DB
    { ...categories[3], top: 80, left: 50 },   // DevOps
    { ...categories[4], top: 80, left: 80 },   // Tools
  ];

  const busY = 50;
  const minX = 20; // Leftmost Bottom Item
  const maxX = 80; // Rightmost Bottom Item

  return (
    <Layout>
      <style>{`
        @keyframes flow-animation {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        .connection-line {
          stroke-dasharray: 6 6;
          animation: flow-animation 1s linear infinite;
        }
      `}</style>
      <div className="h-screen w-full flex items-center justify-center overflow-hidden relative">

        {/* Main Diagram Container */}
        <div className="relative w-full max-w-[90rem] h-[80vh] min-h-[500px] flex items-center justify-center animate-fade-in-up">

          {/* SVG Connections Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Horizontal Bus Line */}
            <line
              x1={`${minX}%`}
              y1={`${busY}%`}
              x2={`${maxX}%`}
              y2={`${busY}%`}
              stroke="currentColor"
              strokeOpacity="0.5"
              strokeWidth="2"
              className="text-primary connection-line"
            />

            {/* Vertical Connections */}
            {categoryConfig.map((cat) => (
              <line
                key={cat.id}
                x1={`${cat.left}%`}
                y1={cat.top > busY ? `${cat.top - 10}%` : `${cat.top + 10}%`} // Connect to top/bottom of card approx
                x2={`${cat.left}%`}
                y2={`${busY}%`}
                stroke="currentColor"
                strokeOpacity="0.5"
                strokeWidth="2"
                className="text-primary connection-line"
              />
            ))}

            {/* Single Central Intersection Point */}
            <circle
              cx="50%"
              cy="50%"
              r="6"
              className="fill-primary animate-pulse"
            />
          </svg>

          {/* Category Nodes */}
          {categoryConfig.map((cat) => (
            <div
              key={cat.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[22rem] lg:max-w-[26rem]"
              style={{ top: `${cat.top}%`, left: `${cat.left}%` }}
            >
              <div
                className="bg-card/90 backdrop-blur-sm border border-border p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group border-t-4 min-h-[11rem]"
                style={{ borderTopColor: cat.color }}
              >
                <div className="flex items-center gap-3 mb-3 border-b border-border/50 pb-2">
                  <div
                    className="w-3 h-3 rounded-full shadow-[0_0_8px]"
                    style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                  ></div>
                  {/* Updated Fonts to match about page paragraphs ('Montserrat, sans-serif') */}
                  <h3 className="font-bold text-xl text-foreground tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>{cat.label}</h3>
                </div>

                {/* Horizontal Wrap List */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 p-1.5 pr-3 bg-secondary/50 rounded-full hover:bg-secondary/80 transition-colors border border-transparent hover:border-primary/20 group/item"
                    >
                      <div className="w-6 h-6 flex-shrink-0 p-0.5 bg-background rounded-full flex items-center justify-center overflow-hidden">
                        <img
                          src={`${cat.iconPath}/${item.file}`}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground/90 whitespace-nowrap group-hover/item:text-primary transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Stacked Layout */}
        <div className="md:hidden absolute inset-0 bg-background overflow-y-auto px-4 py-10 z-50">
          <div className="flex flex-col gap-6 pb-20 mt-10 animate-fade-in-up">
            <h1 className="text-3xl font-bold text-center mb-6 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>My Skills</h1>
            {categoryConfig.map((cat) => (
              <div key={cat.id} className="bg-card/90 backdrop-blur-sm border border-border p-4 rounded-xl shadow-md border-l-4" style={{ borderLeftColor: cat.color }}>
                <div className="flex items-center gap-3 mb-3 border-b border-border/50 pb-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                  ></div>
                  <h3 className="font-bold text-xl text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>{cat.label}</h3>
                </div>
                {/* Mobile Horizontal Wrap */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 p-1.5 pr-3 bg-secondary/30 rounded-full"
                    >
                      <img
                        src={`${cat.iconPath}/${item.file}`}
                        alt={item.name}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="text-xs font-medium text-foreground/90" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
