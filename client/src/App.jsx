import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './layouts/Layout';

// Auth Pages
import Login from './pages/Auth/LoginPage';
import Register from './pages/Auth/RegisterPage';

// User Pages
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Rewards from './pages/Rewards';
import Streaks from './pages/Streaks';
import Analytics from './pages/Analytics';
import Wallet from './pages/Wallet';
import Achievements from './pages/Achievements';
import Challenges from './pages/Challenges';

// Admin Pages
// Updated: 2026-04-24 - Environment Sync
import AdminJira from './pages/AdminJira';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected User Routes */}
        <Route element={<ProtectedRoute allowedRoles={['USER', 'ADMIN']} />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="streaks" element={<Streaks />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="challenges" element={<Challenges />} />
          </Route>
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
          <Route path="/" element={<Layout />}>
             <Route path="admin/jira" element={<AdminJira />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
