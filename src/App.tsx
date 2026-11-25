
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/DashboardPage'
import PlantsPage from './pages/PlantsPage'
import PlantDetailPage from './pages/PlantDetailPage'
import AddPlantPage from './pages/AddPlantPage'
import NotFoundPage from './pages/NotFoundPage'
import { WateringProvider } from './contexts/WateringContext'
import HistoryPage from './pages/HistoryPage'
import EditPlantPage from './pages/EditPlantPage'

function App() {

  return (
    <>
     <WateringProvider>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/collection" element={<PlantsPage />} />
      <Route path="/plante/:id" element={<PlantDetailPage />} />
      <Route path="/ajouter" element={<AddPlantPage />} />
      <Route path="/plante/:id/historique" element={<HistoryPage />} />
      <Route path="/plante/:id/modifier" element={<EditPlantPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </WateringProvider>
    </>
  )
}

export default App
