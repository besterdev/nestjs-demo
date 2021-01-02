import { Course } from './interfaces/course.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  async findAll(): Promise<Course[]> {
    return [
      { id: '100', number: '01204211', title: 'Computer and Programming' },
      {
        id: '200',
        number: '01204212',
        title: 'Discrete mathematics and linear algebra',
      },
      {
        id: '300',
        number: '01204213',
        title: 'Design and analysis of algorithms',
      },
    ];
  }
}
