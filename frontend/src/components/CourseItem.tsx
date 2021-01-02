import { Course } from "../interfaces";
import React from "react";

type CourseItemProps = {
  course: Course;
};

export default function CourseItem({ course }: CourseItemProps) {
  return (
    <li>
      {course.number} - {course.title}
    </li>
  );
}
