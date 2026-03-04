import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Info from './pages/Info'
import Profile from './pages/Profile'
import ReachOut from './pages/ReachOut'
import Team from './pages/Team'
import './App.css'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reach-out" element={<ReachOut />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Layout>
  )
}
