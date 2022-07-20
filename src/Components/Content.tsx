import React, { useState } from 'react'
import styles from './Content.module.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

import { ITask } from '../Interfaces/Task'
import Modal from './Modal'

const Content = () => {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToupdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.getElementById('modal')
    if (display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide')
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToupdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updateTask: ITask = { id, title, difficulty }
    const updatedItems = taskList.map(task =>
      task.id === updateTask.id ? updateTask : task
    )
    setTaskList(updatedItems)

    hideOrShowModal(false)
  }

  return (
    <>
      <Modal
        children={
          <TaskForm
            btnText="Edit"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
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
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
    </>
  )
}

export default Content
