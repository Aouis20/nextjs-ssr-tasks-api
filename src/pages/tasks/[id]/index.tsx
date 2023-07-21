import { TaskType } from '@/pages';
import React from 'react'
import { GetServerSidePropsContext } from 'next';


export async function getServerSideProps(context:GetServerSidePropsContext) {
  const { id } = context.query;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const task = await response.json();
    return { props: { task } }
  } catch (err) {
    console.log(err)
    return { props: { task: null } };
  }

}

type TaskProps = {
  task: TaskType;
};

const TaskDetails = ({task}: TaskProps) => {
  return (
    task ? (
    <div>
      <h1>{task.title}</h1>
      <p>UserId: {task.userId}</p>
      <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
    </div>
    ) : (
        <div>
          <p>Tâche indisponible</p>
        </div>
    )
  )
}

export default TaskDetails