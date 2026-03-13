import { NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { Project } from '@/lib/entities/Project';

export async function GET() {
  try {
    const ds = await getDataSource();
    const projectRepo = ds.getRepository(Project);
    const projects = await projectRepo.find({
      order: { displayOrder: 'ASC' },
    });
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}
