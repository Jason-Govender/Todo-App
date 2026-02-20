import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Unauthorized from './pages/unauthorized'
import AdminDashboard from './pages/admin'
import ClientDashboard from './pages/client'
import { withAuth } from './hoc/auth'

localStorage.clear()
const AdminRoute = withAuth(AdminDashboard, 'admin')
const ClientRoute = withAuth(ClientDashboard, 'client')

function HomeRedirect() {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  if (!token) return <Navigate to="/login" replace />
  if (role === 'admin') return <Navigate to="/admin" replace />
  if (role === 'client') return <Navigate to="/client" replace />
  return <Navigate to="/login" replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRedirect />} />

        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route path="/admin" element={<AdminRoute />} />
        <Route path="/client" element={<ClientRoute />} />

        {/* catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
