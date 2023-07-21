import type { GetServerSideProps } from 'next';
import Tasks from "./tasks";
import { GetServerSidePropsContext } from 'next';

 
export type TaskList = {
  tasks: TaskType[]
}

export type TaskType = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
 
export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const tasks = await response.json();
    return { props: { tasks } }
  } catch (err) {
    console.log(err);
    return { props: { tasks: null } };
  }
}


export default function Home({tasks}: TaskList) {
  return (
    tasks.length > 0 ? (    
      <Tasks tasks={tasks} />
    ) : (
      <div>
        <p>Aucune tâches trouvées</p>
      </div>
    )
  )
}
