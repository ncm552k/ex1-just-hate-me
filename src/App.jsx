import { useRoutes } from 'react-router-dom'
import routes from 'routes/routes'

const App = () => {
  const appRoutes = useRoutes(routes)
  return <div className=' bg-grayColor h-screen'>{appRoutes}</div>
}

export default App
