import { TaskType } from "@/pages"
import { useRouter } from 'next/router'

type TaskProps = {
  task: TaskType
}

const TaskComponent = ({ task }: TaskProps) => {
  const router = useRouter()

  const handleRouter = () => {
    router.push(`/tasks/${task.id}`)
  }
  return (
    <li onClick={handleRouter}>
      {task.title}
    </li>
  )
}

export default TaskComponent