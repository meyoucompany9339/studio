import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import CooperationPage from './pages/CooperationPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="spivpratsia" element={<CooperationPage />} />
      </Route>
    </Routes>
  )
}
