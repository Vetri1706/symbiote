// SYMBIOTE Native Mock API Service
// This file replaces the live backend interactions with high-fidelity local data.

const MOCK_DATA = {
  dashboard: {
    stats: { total_xp: 4280, current_level: 14, wallet_balance: 1850, streak: 23 },
    pendingTasks: [
      { id: 101, title: 'Complete Code Review Sprint' },
      { id: 102, title: 'Innovation Pitch Prep' },
      { id: 103, title: 'Network Builder' },
    ]
  },
  streak: {
    success: true,
    data: {
      user_id: 3,
      current_streak: 23,
      longest_streak: 31,
      freeze_count: 2,
      shield_active: true,
      xp_insurance: false,
      logs: [
        { date: '2026-04-10', status: 'completed' },
        { date: '2026-04-11', status: 'completed' },
        { date: '2026-04-12', status: 'completed' },
        { date: '2026-04-13', status: 'completed' },
        { date: '2026-04-14', status: 'completed' },
        { date: '2026-04-15', status: 'missed' },
        { date: '2026-04-16', status: 'completed' },
      ]
    }
  },
  leaderboard: {
    success: true,
    leaderboard: [
      { id: 1, name: 'Lokesh Kumar M S', role: 'Developer', total_xp: 5120, current_level: 16, streak: 31 },
      { id: 2, name: 'Sriram R P', role: 'Sales', total_xp: 4890, current_level: 15, streak: 28 },
      { id: 3, name: 'SriVishnu S', role: 'Developer', total_xp: 4280, current_level: 14, streak: 23 },
      { id: 4, name: 'Vishnudharshan S', role: 'Manager', total_xp: 3950, current_level: 12, streak: 15 }
    ]
  }
};

const api = {
  get: async (url) => {
    console.log(`[MOCK API] GET: ${url}`);
    
    if (url.includes('/dashboard')) return { data: { success: true, data: MOCK_DATA.dashboard } };
    if (url.includes('/streak/status')) return { data: MOCK_DATA.streak };
    if (url.includes('/leaderboard')) return { data: MOCK_DATA.leaderboard };
    
    return { data: { success: true, data: [] } };
  },
  
  post: async (url, payload) => {
    console.log(`[MOCK API] POST: ${url}`, payload);
    
    if (url === '/streak/use-freeze') {
      MOCK_DATA.streak.data.freeze_count -= 1;
      return { data: { success: true, message: 'Freeze used successfully' } };
    }
    
    return { data: { success: true } };
  }
};

export default api;
