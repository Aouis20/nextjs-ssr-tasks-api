import type { GetServerSideProps } from 'next';
import Tasks from "./tasks";
 
export type TaskList = {
  tasks: TaskType[]
}

export type TaskType = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
 
export const getServerSideProps: GetServerSideProps<{
  tasks: TaskList
}> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const tasks = await response.json();
  return { props: { tasks } }
}


export default function Home({tasks}: TaskList) {
  
  return (
    <Tasks tasks={tasks} />
  )
}
