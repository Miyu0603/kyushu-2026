import React, { useEffect, useRef, useState } from 'react';
import { ITINERARY } from '../constants';
import { ItineraryEvent } from '../types';
import { BedIcon, MapIcon } from '../components/Icons';

interface ItineraryViewProps {
  onNavigateToDetail: (id: string) => void;
  selectedDateIdx: number;
  setSelectedDateIdx: (idx: number) => void;
}

/* ── Category System ── */
type EventCategory = 'flight' | 'hotel' | 'car' | 'train' | 'shrine' | 'nature' | 'food' | 'shopping' | 'entertainment' | 'default';

// Muted iOS-system-color palette (lower saturation)
const CAT: Record<EventCategory, { color: string; bg: string }> = {
  flight: { color: '#0A84FF', bg: 'rgba(10,132,255,0.10)' },
  hotel: { color: '#FF9500', bg: 'rgba(255,149,0,0.10)' },
  car: { color: '#5AC8FA', bg: 'rgba(90,200,250,0.12)' },
  train: { color: '#007AFF', bg: 'rgba(0,122,255,0.10)' },
  shrine: { color: '#AF52DE', bg: 'rgba(175,82,222,0.10)' },
  nature: { color: '#34C759', bg: 'rgba(52,199,89,0.10)' },
  food: { color: '#FF6B35', bg: 'rgba(255,107,53,0.10)' },
  shopping: { color: '#FFCC00', bg: 'rgba(255,204,0,0.14)' },
  entertainment: { color: '#BF5AF2', bg: 'rgba(191,90,242,0.10)' },
  default: { color: '#8E8E93', bg: 'rgba(142,142,147,0.12)' },
};

function getCategory(desc: string, note?: string): EventCategory {
  const d = `${desc} ${note || ''}`;
  if (/機場|搭機|航班|登機|起飛|班機/.test(d)) return 'flight';
  if (/入住|退房|飯店|旅館|酒店|民宿|寄放行李/.test(d)) return 'hotel';
  if (/取車|還車|租車|自駕|開回|BUDGET|NISSAN|加油/.test(d)) return 'car';
  if (/JR|新幹線|由布院之森|鐵道|特急|搭乘|搭.*前往|搭.*到|轉車/.test(d)) return 'train';
  if (/神社|神宮|天滿宮|神樂|涅槃|南藏院|鳥居|稻荷|竈門/.test(d)) return 'shrine';
  if (/火山|峽|草千里|日出|國見|地獄|金鱗湖|太陽花園|水族館|海洋世界|散策|湯之坪|海岸|洗衣板|Sun Messe/.test(d)) return 'nature';
  if (/晚餐|午餐|早餐|美食|屋台|餐廳/.test(d)) return 'food';
  if (/購物|LaLaport|運河城|AMU|買/.test(d)) return 'shopping';
  if (/博物館|熊本城|門司港|城彩苑|鋼彈/.test(d)) return 'entertainment';
  return 'default';
}

const CatIcon: React.FC<{ cat: EventCategory }> = ({ cat }) => {
  const p = {
    width: 19, height: 19, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  };
  switch (cat) {
    case 'flight':
      // Modern paper plane / airliner silhouette
      return (
        <svg {...p}>
          <path d="M21 4 3 11l7 2 2 7 9-16z" />
          <path d="m10 13 4-4" />
        </svg>
      );
    case 'hotel':
      // Building with sign & lamp
      return (
        <svg {...p}>
          <path d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14" />
          <path d="M3 21h18" />
          <path d="M9 11h.01M9 15h.01M15 11h.01M15 15h.01" />
          <path d="M11 21v-3a1 1 0 0 1 1-1 1 1 0 0 1 1 1v3" />
        </svg>
      );
    case 'car':
      // Cleaner sedan outline
      return (
        <svg {...p}>
          <path d="M5 17h14M3 13l2-5a2 2 0 0 1 2-1.4h10a2 2 0 0 1 2 1.4l2 5" />
          <path d="M3 13v4a1 1 0 0 0 1 1h1M21 13v4a1 1 0 0 1-1 1h-1" />
          <circle cx="7.5" cy="17.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="16.5" cy="17.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'train':
      // Shinkansen-like nose train
      return (
        <svg {...p}>
          <path d="M4 15c0-5 3-9 8-9s8 4 8 9v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3z" />
          <path d="M4 13h16" />
          <path d="M8 20l-2 2M16 20l2 2" />
          <circle cx="8.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'shrine':
      // Torii gate – iconic Japanese silhouette
      return (
        <svg {...p}>
          <path d="M3 7c3 1 6 1.4 9 1.4S18 8 21 7" />
          <path d="M3 7l1-2M21 7l-1-2" />
          <path d="M3 10h18" />
          <path d="M6.5 7v14M17.5 7v14" />
          <path d="M3 21h18" />
        </svg>
      );
    case 'nature':
      // Twin mountains with sun
      return (
        <svg {...p}>
          <circle cx="18" cy="6" r="2" />
          <path d="m3 19 5-8 4 6 3-4 6 6z" />
          <path d="M3 19h18" />
        </svg>
      );
    case 'food':
      // Bowl with chopsticks / steam
      return (
        <svg {...p}>
          <path d="M3 12h18a8 8 0 0 1-9 7.9A8 8 0 0 1 3 12z" />
          <path d="M3 12c0-1.5 4-3 9-3s9 1.5 9 3" />
          <path d="M9 6c0-1 .5-2 1-3M13 6c0-1 .5-2 1-3" />
        </svg>
      );
    case 'shopping':
      // Shopping bag with handle
      return (
        <svg {...p}>
          <path d="M5 8h14l-1 12a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-1.8L5 8z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      );
    case 'entertainment':
      // Movie ticket / event
      return (
        <svg {...p}>
          <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8z" />
          <path d="M12 7v2M12 12v2M12 17v0" />
        </svg>
      );
    default:
      // Map pin
      return (
        <svg {...p}>
          <path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
  }
};

const TimelineEvent: React.FC<{
  event: ItineraryEvent;
  isLast: boolean;
  onLocationClick: (id: string) => void;
}> = ({ event, isLast, onLocationClick }) => {
  return (
    <div className="flex items-start relative pb-5">
      {/* Time column */}
      <div className="w-[52px] shrink-0 pt-3.5 text-right pr-3.5">
        <span className="text-[12px] font-mono font-medium text-ios-label-3 leading-none tracking-wider">{event.time}</span>
      </div>

      {/* Card */}
      <div className="flex-1 min-w-0">
        <div
          onClick={() => event.locationId && onLocationClick(event.locationId)}
          className={`relative bg-ios-card rounded-ios border border-ios-separator shadow-ios-card px-4 py-3.5 transition-transform ${event.locationId ? 'cursor-pointer active:scale-[0.98]' : ''}`}
        >
          <p className="text-[15px] font-semibold text-ios-label leading-relaxed tracking-tight">{event.description}</p>
          {event.note && (
            <p className="text-[13px] text-ios-label-2 mt-1.5 leading-relaxed tracking-tight">{event.note}</p>
          )}
          {event.locationId && (
            <p className="text-[12px] text-mag-gold font-semibold mt-2.5 tracking-wide">查看詳情 ›</p>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Sticky Date Chip Strip ── */
const DateChipStrip: React.FC<{
  selectedIdx: number;
  onSelect: (idx: number) => void;
}> = ({ selectedIdx, onSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current?.querySelector<HTMLElement>(`[data-idx="${selectedIdx}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [selectedIdx]);

  return (
    <div
      className="sticky z-20 -mx-6 px-6 bg-ios-bg/95 backdrop-blur-ios border-b border-ios-separator"
      style={{ top: 0 }}
    >
      <div ref={containerRef} className="flex gap-3 overflow-x-auto py-3.5 no-scrollbar">
        {ITINERARY.map((day, idx) => {
          const active = idx === selectedIdx;
          return (
            <button
              key={idx}
              data-idx={idx}
              onClick={() => onSelect(idx)}
              className={`shrink-0 flex flex-col items-center justify-center w-[52px] h-[52px] rounded-full transition-all active:scale-95 ${active ? 'bg-mag-gold text-white shadow-soft' : 'bg-ios-fill-3 text-ios-label'}`}
            >
              <span className={`text-[10px] font-medium leading-none tracking-wider ${active ? 'text-white/90' : 'text-ios-label-2'}`}>
                {day.weekday[2]}
              </span>
              <span className={`text-[19px] font-light font-mono leading-none mt-1.5 tracking-tight ${active ? 'text-white' : 'text-ios-label'}`}>
                {day.date.split('/')[1]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const ItineraryView: React.FC<ItineraryViewProps> = ({ onNavigateToDetail, selectedDateIdx, setSelectedDateIdx }) => {
  const currentDay = ITINERARY[selectedDateIdx];
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="animate-fade-in-soft">
      <DateChipStrip selectedIdx={selectedDateIdx} onSelect={setSelectedDateIdx} />

      <div>
        {/* Day Header */}
        <div className="mb-7 relative pt-6">
          <div className="pr-14">
            <h2 className="text-ios-title2 font-semibold text-[#1c1c1e]/90 leading-tight tracking-normal">
              {currentDay.title}
            </h2>
            {currentDay.accommodation && (
              <div className="flex items-center gap-2 mt-3">
                <BedIcon className="w-4 h-4 text-mag-gold" />
                {currentDay.accommodationMapUrl ? (
                  <a
                    href={currentDay.accommodationMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium text-ios-label-2 active:text-mag-gold tracking-tight"
                  >
                    {currentDay.accommodation}
                  </a>
                ) : (
                  <span className="text-[14px] font-medium text-ios-label-2 tracking-tight">
                    {currentDay.accommodation}
                  </span>
                )}
              </div>
            )}
          </div>
          {currentDay.mapUrl && (
            <a
              href={currentDay.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-0 top-6 w-11 h-11 flex items-center justify-center bg-mag-gold text-white rounded-ios shadow-float active:scale-90 transition-transform"
              aria-label="開啟地圖"
            >
              <MapIcon className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Timeline */}
        <div className="relative">
          {currentDay.events.map((event, idx) => (
            <TimelineEvent
              key={idx}
              event={event}
              isLast={idx === currentDay.events.length - 1}
              onLocationClick={onNavigateToDetail}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="回到頂部"
        className={`fixed right-5 z-40 w-11 h-11 flex items-center justify-center bg-mag-gold text-white rounded-full shadow-float transition-all duration-300 active:scale-90 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
        style={{ bottom: 'calc(env(safe-area-inset-bottom) + 96px)' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
};
