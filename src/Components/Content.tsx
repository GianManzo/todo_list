import React from 'react'
import styles from './Content.module.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

const Content = () => {
  return (
    <>
      <main className={styles.main}>
        <div>
          <h2>Qual sua tarefa?</h2>
          <TaskForm btnText="Criar Tarefa" />
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
