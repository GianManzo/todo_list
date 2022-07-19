import React from 'react'
import { ITask } from '../Interfaces/Task'
import styles from './TaskList.module.css'
import { BsPencil, BsTrash } from 'react-icons/bs'
type Props = {
  taskList: ITask[]
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map(task => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Difuculdade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <BsPencil />
              <BsTrash />
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  )
}

export default TaskList
