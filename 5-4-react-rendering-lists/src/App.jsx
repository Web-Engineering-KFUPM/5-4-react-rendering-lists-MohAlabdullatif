import { useState } from "react";
import { sampleCourses } from "./data";
import CourseCard from "./components/CourseCard";
import "./index.css";

export default function App() {
  const [courses, setCourses] = useState(sampleCourses);

  // Helper function (no need to edit this)
  function mutateCourseByIndex(index, updater) {
    setCourses((cs) =>
      cs.map((c, i) => (i === index ? { ...c, tasks: updater(c.tasks) } : c))
    );
  }

  return (
    <main className="wrap">
      <header className="appHeader">
        <h1>
          Study Buddy <span className="blink">▍</span>
        </h1>
        <p className="subtitle">Lists • Keys • Conditional Rendering</p>
      </header>

      <section className="grid">
        {courses.map((course, idx) => (
          <CourseCard
            key={course.id}
            course={course}
            index={idx}
            onMutateCourse={mutateCourseByIndex}
          />
        ))}
      </section>
    </main>
  );
}