import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from './Content.module.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

import { ITask } from '../Interfaces/Task'

const Content = () => {
  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <>
      <main className={styles.main}>
        <div>
          <h2>Qual sua tarefa?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList />
        </div>
      </main>
    </>
  )
}

export default Content
