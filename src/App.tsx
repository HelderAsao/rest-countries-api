import './App.css'
import AppRoutes from './components/AppRoutes'
import { ThemeProvider } from './components/ThemeContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>

    </>
  )
}

export default App
