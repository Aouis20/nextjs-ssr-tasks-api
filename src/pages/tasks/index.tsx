import TaskComponent from '@/components/Task'
import { TaskList } from '..'

const Tasks = ({tasks}: TaskList) => {
  return (
    <div>
      <h1>Tasks:</h1>
      <ul>
        {tasks.map((task) => (
          <TaskComponent key={task.id} task={task} />
        ))}  
      </ul>
              
    </div>
  )
}

export default Tasks