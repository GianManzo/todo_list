import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from './Content.module.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

import { ITask } from '../Interfaces/Task'

const Content = () => {
  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  return (
    <>
      <main className={styles.main}>
        <div>
          <h2>What is your task?</h2>
          <TaskForm
            btnText="Create"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Your tasks</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
    </>
  )
}

export default Content
