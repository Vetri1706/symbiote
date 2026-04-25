import { useState, useEffect } from 'react';
import { Card } from '../../components/ui';
import { Target, CheckCircle2 } from 'lucide-react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function Goals() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api('/tasks');
        if (response && Array.isArray(response)) {
          setTasks(response);
        } else if (response && response.tasks) {
          setTasks(response.tasks);
        } else {
          loadFallbackTasks();
        }
      } catch (err) {
        console.warn('API unavailable, loading dummy test values for Goals:', err);
        loadFallbackTasks();
      } finally {
        setLoading(false);
      }
    };
    
    const loadFallbackTasks = () => {
        setTasks([
          { id: 101, title: 'Complete Backend Integration', description: 'Finish API setup' },
          { id: 102, title: 'Review Schema Logs', description: 'Check database health' },
          { id: 103, title: 'Design Frontend Mockups', description: 'Update Figma' },
          { id: 104, title: 'Onboard New Employees', description: 'Complete HR sync' }
        ]);
    };
    
    fetchTasks();
  }, []);

  const handleComplete = async (taskId) => {
    try {
      await api('/task/complete', { method: 'POST', body: JSON.stringify({ taskId }) });
      // Remove it from frontend view immediately
      setTasks(tasks.filter(t => t.id !== taskId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Goals & Work</h1>
        <p className="text-gray-400">Track your tasks and active objectives.</p>
      </div>

      {loading ? <p>Loading...</p> : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tasks.length === 0 ? <p className="text-gray-400">No active tasks.</p> : null}
          {tasks.map(task => (
            <Card key={task.id} className="p-6">
              <div className="flex items-start gap-3 mb-4 h-16">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] shadow-inner text-violet-400 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white leading-tight">{task.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{task.description}</p>
                </div>
              </div>
              <button 
                onClick={() => handleComplete(task.id)}
                className="w-full mt-2 py-2 px-4 rounded-lg bg-[#0a0a0a] border border-white/5 text-gray-300 font-medium hover:bg-white/5 transition-all text-white transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> Complete Task
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
