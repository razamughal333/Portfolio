import { Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'

export default function App() {
  return (
    <Routes>
      {/* Layout holds the menu, footer and back-to-top, and shows the current page inside it */}
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
