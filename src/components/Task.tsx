import { TaskType } from "@/pages"
import { useRouter } from 'next/router'
import Link from 'next/link'

type TaskProps = {
  task: TaskType
}

const TaskComponent = ({ task }: TaskProps) => {

  return (
    <li>
      <Link href={`/tasks/${task.id}`}>
        {task.title}
      </Link>
    </li>
  )
}

export default TaskComponent