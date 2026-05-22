import React from 'react';
import { Tab } from '../types';

interface TabBarProps {
  activeTab: Tab;
  onChange: (t: Tab) => void;
}

const TAB_LABELS: Record<Tab, string> = {
  [Tab.ITINERARY]: '行程',
  [Tab.PREP]: '準備',
  [Tab.COST]: '記帳',
  [Tab.PACKING]: '行李',
  [Tab.SHOPPING]: '購物',
  [Tab.INFO]: '資訊',
};

export const TabBar: React.FC<TabBarProps> = ({ activeTab, onChange }) => {
  return (
    <nav className="flex-none bg-white border-b border-ios-separator">
      <div className="flex overflow-x-auto no-scrollbar">
        {Object.values(Tab).map((tab) => {
          const active = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => onChange(tab)}
              className={`flex-1 min-w-0 py-2.5 text-[13px] font-medium tracking-tight whitespace-nowrap transition-colors relative
                ${active ? 'text-mag-gold' : 'text-ios-label-2'}`}
              aria-current={active ? 'page' : undefined}
            >
              {TAB_LABELS[tab]}
              {active && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-mag-gold" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
