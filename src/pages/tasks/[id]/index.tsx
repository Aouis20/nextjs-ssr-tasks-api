import { TaskType } from '@/pages';
import React from 'react'
import { GetServerSidePropsContext } from 'next';


export async function getServerSideProps(context:GetServerSidePropsContext) {
  const { id } = context.query;
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const task = await response.json();
  return { props: { task } }

}

type TaskProps = {
  task: TaskType;
};


const TaskDetails = ({task}: TaskProps) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>UserId: {task.userId}</p>
      <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default TaskDetails