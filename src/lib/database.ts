import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Project } from './entities/Project';
import { ContactSubmission } from './entities/ContactSubmission';
import fs from 'fs';
import path from 'path';

const DATABASE_PATH = process.env.DATABASE_PATH || './data/portfolio.db';

// Ensure data directory exists
const dbDir = path.dirname(path.resolve(DATABASE_PATH));
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

let dataSource: DataSource | null = null;

export async function getDataSource(): Promise<DataSource> {
  if (dataSource && dataSource.isInitialized) {
    return dataSource;
  }

  dataSource = new DataSource({
    type: 'better-sqlite3',
    database: DATABASE_PATH,
    entities: [Project, ContactSubmission],
    synchronize: true,
    logging: false,
  });

  await dataSource.initialize();
  await seedDatabase(dataSource);
  return dataSource;
}

async function seedDatabase(ds: DataSource): Promise<void> {
  const projectRepo = ds.getRepository(Project);
  const count = await projectRepo.count();

  if (count === 0) {
    const projects = [
      {
        title: 'E-Commerce Platform',
        description:
          'A full-featured e-commerce platform with product management, shopping cart, and Stripe payment integration. Built with Next.js, TypeScript, and PostgreSQL.',
        techStack: 'Next.js,TypeScript,PostgreSQL,Stripe,Tailwind CSS,Prisma',
        liveUrl: 'https://demo.example.com',
        githubUrl: 'https://github.com/example/ecommerce',
        imageUrl: '',
        displayOrder: 1,
      },
      {
        title: 'Real-Time Chat App',
        description:
          'A real-time messaging application with WebSocket support, rooms, and user authentication. Features end-to-end encryption and file sharing capabilities.',
        techStack: 'React,Node.js,Socket.io,MongoDB,Express,JWT',
        liveUrl: 'https://chat.example.com',
        githubUrl: 'https://github.com/example/chat-app',
        imageUrl: '',
        displayOrder: 2,
      },
      {
        title: 'AI Task Manager',
        description:
          'An intelligent task management system that uses AI to prioritize and categorize tasks automatically. Integrates with OpenAI API for smart suggestions.',
        techStack: 'React,FastAPI,Python,OpenAI,SQLite,Docker',
        liveUrl: 'https://tasks.example.com',
        githubUrl: 'https://github.com/example/ai-tasks',
        imageUrl: '',
        displayOrder: 3,
      },
      {
        title: 'DevOps Dashboard',
        description:
          'A comprehensive DevOps monitoring dashboard that aggregates metrics from multiple sources. Supports Kubernetes, Docker, and cloud providers.',
        techStack: 'Vue.js,Go,Kubernetes,Prometheus,Grafana,Docker',
        liveUrl: 'https://devops.example.com',
        githubUrl: 'https://github.com/example/devops-dashboard',
        imageUrl: '',
        displayOrder: 4,
      },
      {
        title: 'Open Source CLI Tool',
        description:
          'A developer productivity CLI tool for scaffolding projects with best practices. Supports multiple frameworks and comes with customizable templates.',
        techStack: 'TypeScript,Node.js,Commander.js,Handlebars,Jest',
        liveUrl: '',
        githubUrl: 'https://github.com/example/cli-tool',
        imageUrl: '',
        displayOrder: 5,
      },
      {
        title: 'Mobile Fitness Tracker',
        description:
          'A cross-platform mobile app for tracking workouts, nutrition, and health metrics. Features beautiful charts and AI-powered workout recommendations.',
        techStack: 'React Native,Expo,TypeScript,Firebase,D3.js',
        liveUrl: 'https://fitness.example.com',
        githubUrl: 'https://github.com/example/fitness-tracker',
        imageUrl: '',
        displayOrder: 6,
      },
    ];

    await projectRepo.save(projects);
  }
}
