import { Header } from './components/Header'
import { TaskList } from './components/TaskList'

const Tasks = [
  { description: 'Buy a new gaming laptop' },
  { description: 'Complete a previus task ' },
  { description: 'Create video for youtube' },
  { description: 'Create a new portofolio site' },
]

function App() {

  return (
    <>
      <Header />
      <TaskList list={Tasks} />
    </>
  )
}

export default App
