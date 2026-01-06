
import React, { useState, useEffect } from 'react';
import { TOPICS } from './constants';
import { CategoryId } from './types';
import Sidebar from './components/Sidebar';
import TopicContent from './components/TopicContent';
import Quiz from './components/Quiz';
import Chatbot from './components/Chatbot';

// Fix: Removed local declare global for Window and aistudio as it conflicts 
// with the pre-existing environment definition (AIStudio type).

const App: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<CategoryId>(CategoryId.ALKANE);
  const [view, setView] = useState<'study' | 'quiz'>('study');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState<boolean>(true);

  useEffect(() => {
    const checkApiKey = async () => {
      // Fix: Access aistudio via window casting to bypass potential type mismatch errors
      // during compilation while the environment-provided AIStudio type is active.
      const aistudio = (window as any).aistudio;
      if (aistudio) {
        const selected = await aistudio.hasSelectedApiKey();
        setHasApiKey(selected);
      }
    };
    checkApiKey();
  }, []);

  const handleSelectKey = async () => {
    const aistudio = (window as any).aistudio;
    if (aistudio) {
      await aistudio.openSelectKey();
      // Fix: Assume the key selection was successful after triggering openSelectKey() 
      // as per race condition mitigation guidelines.
      setHasApiKey(true);
    }
  };

  const activeTopic = TOPICS.find(t => t.id === activeTopicId) || TOPICS[0];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar 
        activeId={activeTopicId} 
        onSelect={setActiveTopicId} 
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main className="flex-1 lg:ml-72 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between sticky top-0 z-30 gap-4">
          <div className="flex items-center w-full sm:w-auto">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="mr-3 p-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 truncate">{activeTopic.name}</h2>
              <div className="flex items-center gap-2">
                <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-semibold">Lộ trình 2025</p>
                {!hasApiKey && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800">
                    Chưa có API Key
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setView('study')}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                  view === 'study' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                📖 Lý thuyết
              </button>
              <button
                onClick={() => setView('quiz')}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                  view === 'quiz' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                📝 Luyện tập
              </button>
            </div>

            <button
              onClick={handleSelectKey}
              className={`p-2 rounded-xl transition-all border flex items-center gap-2 ${
                hasApiKey 
                  ? 'border-teal-200 text-teal-600 hover:bg-teal-50' 
                  : 'border-amber-300 text-amber-700 bg-amber-50 hover:bg-amber-100 animate-pulse'
              }`}
              title="Cài đặt API Key cá nhân"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <span className="hidden xl:inline text-xs font-bold">API Key</span>
            </button>
          </div>
        </header>

        {/* Info Banner for API Key if missing */}
        {!hasApiKey && (
          <div className="bg-amber-50 border-b border-amber-100 px-6 py-2 text-center">
            <p className="text-xs text-amber-800">
              Bạn đang dùng chung API mặc định. Hãy <button onClick={handleSelectKey} className="underline font-bold">nhấn vào đây</button> để thiết lập API Key của riêng bạn (được lưu cục bộ).
            </p>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-4xl mx-auto pb-24">
            {view === 'study' ? (
              <TopicContent content={activeTopic.content} />
            ) : (
              <Quiz questions={activeTopic.questions} topicName={activeTopic.name} />
            )}
          </div>
        </div>

        {/* Global Chat Assistant */}
        <Chatbot />
      </main>
    </div>
  );
};

export default App;
