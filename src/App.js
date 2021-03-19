import React from "react";

const Course = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part
        name={props.course.parts[0].name}
        exercises={props.course.parts[0].exercises}
      />
      <Part
        name={props.course.parts[1].name}
        exercises={props.course.parts[1].exercises}
      />
      <Part
        name={props.course.parts[2].name}
        exercises={props.course.parts[2].exercises}
      />
    </div>
  );
};
const Total = (props) => {
  let sum = 0;
  props.course.parts.forEach((element) => {
    sum += element.exercises;
  });
  return <p>Number of exercises {sum}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
