
import React from 'react';
import { TopicContent as TopicContentType } from '../types';

interface Props {
  content: TopicContentType;
}

const TopicContent: React.FC<Props> = ({ content }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center">
          <span className="p-2 bg-teal-100 rounded-lg mr-3">📚</span>
          Khái niệm & Nhận diện
        </h2>
        <p className="text-slate-700 leading-relaxed text-lg">
          {content.definition}
        </p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center">
          <span className="p-2 bg-teal-100 rounded-lg mr-3">🏷️</span>
          Quy tắc gọi tên (IUPAC)
        </h2>
        <ul className="space-y-3">
          {content.iupacRules.map((rule, idx) => (
            <li key={idx} className="flex items-start text-slate-700">
              <span className="flex-shrink-0 w-6 h-6 bg-teal-500 text-white text-xs font-bold rounded-full flex items-center justify-center mr-3 mt-0.5">
                {idx + 1}
              </span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </section>

      {content.commonNames && (
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center">
            <span className="p-2 bg-teal-100 rounded-lg mr-3">🗣️</span>
            Tên thông thường
          </h2>
          <div className="flex flex-wrap gap-2">
            {content.commonNames.map((name, idx) => (
              <span key={idx} className="px-3 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded-full text-sm font-medium">
                {name}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center">
          <span className="p-2 bg-teal-100 rounded-lg mr-3">✨</span>
          Ví dụ minh họa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.examples.map((ex, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-teal-300 transition-colors">
              <div className="text-sm font-mono text-slate-500 mb-1">Cấu tạo:</div>
              <div className="text-lg font-bold text-teal-900 mb-2">{ex.formula}</div>
              <div className="text-sm text-slate-600">
                <span className="font-semibold">IUPAC:</span> {ex.name}
              </div>
              {ex.common && (
                <div className="text-sm text-slate-600">
                  <span className="font-semibold">Thông thường:</span> {ex.common}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopicContent;
