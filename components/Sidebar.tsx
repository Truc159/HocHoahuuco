
import React from 'react';
import { TOPICS } from '../constants';
import { CategoryId } from '../types';

interface SidebarProps {
  activeId: CategoryId;
  onSelect: (id: CategoryId) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeId, onSelect, isOpen, onToggle }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-teal-800 text-white transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-teal-700 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Học Hóa Pro 🧪</h1>
          <button onClick={onToggle} className="lg:hidden text-teal-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <div className="mb-4 px-4 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            Danh lục chất
          </div>
          {TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => { onSelect(topic.id); onToggle(); }}
              className={`w-full flex items-center px-4 py-3 mb-1 rounded-lg transition-colors text-left ${
                activeId === topic.id 
                  ? 'bg-teal-600 text-white shadow-lg' 
                  : 'text-teal-100 hover:bg-teal-700'
              }`}
            >
              <span className="text-sm font-medium">{topic.name}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-4 bg-teal-900 text-xs text-teal-400">
          Phát triển cho giáo dục 🇻🇳
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
