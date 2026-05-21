
import React, { useState } from 'react';
import { PRE_TRIP_NOTES } from '../constants';
import { ChecklistItem } from '../types';
import { CheckIcon, TrashIcon, EditIcon, PlusIcon, SheetIcon, ExternalLinkIcon, BedIcon, CarIcon, TrainIcon } from '../components/Icons';
import { TextInputSheet, ConfirmDeleteSheet } from '../components/TextInputSheet';

interface PrepViewProps {
  checkedItems: Set<string>;
  toggleItem: (id: string) => void;
  list: ChecklistItem[];
  setList: (list: ChecklistItem[]) => void;
}

const VOUCHERS: { name: string; url: string; type?: 'hotel' | 'car' | 'train' }[] = [
  { name: 'ART 宮崎天空塔酒店', url: 'https://drive.google.com/open?id=1869YGwJEq7yfKSikvL2D6zc3SjY5JPuO', type: 'hotel' },
  { name: 'スーパーホテル熊本駅前天然温泉', url: 'https://drive.google.com/open?id=1pwhxJPfWe6Ysv5Kpl-Gr0_z4yqIZ9itJ', type: 'hotel' },
  { name: 'ゲストハウス静穂', url: 'https://drive.google.com/open?id=1KfTIdS1KCwnupW3fFsAVCsbAUa84Jolp', type: 'hotel' },
  { name: '古都の花心', url: 'https://drive.google.com/open?id=1ECIyNidP2BNA8QFwLyVUb2o2ErTxeRvm', type: 'hotel' },
  { name: 'ヴィアイン博多口駅前 - JR西日本グループ', url: 'https://drive.google.com/open?id=1yIxfAxiyv5e5TzJiWmr3r-XYWI2tpNMT', type: 'hotel' },
  { name: '新幹線鹿兒島到熊本 - 錢錢', url: 'https://drive.google.com/open?id=1TLlO93IXwcCAnPvx01walM8sYeiDc2K9', type: 'train' },
  { name: '新幹線鹿兒島到熊本 - 想想', url: 'https://drive.google.com/open?id=1tZVbKUMg7ScS7-maX4l7jQ5IKfKLHj_T', type: 'train' },
  { name: '由布院之森指定席', url: 'https://drive.google.com/open?id=1wV45yhIoCK6EFO_B42QOTYriHuWNZYDX', type: 'train' },
  { name: '北九州 JR PASS - 想想', url: 'https://drive.google.com/open?id=1-sopakaX4FE4uB6BTyTKIFZ0ypdq4YT6', type: 'train' },
  { name: '北九州 JR PASS - 錢錢', url: 'https://drive.google.com/file/d/1zwC3_JDP0alWXMdGLe1ny8ha6UOX4d7u/view?usp=drive_link', type: 'train' },
  { name: '租車 - 宮崎當日', url: 'https://drive.google.com/open?id=1S7Nx4uR_575crPjRWl_tIgmCp8c6Iull', type: 'car' },
  { name: '租車 - 熊本到由布', url: 'https://drive.google.com/file/d/1o2H8t3rzsQjFhh_gdH6V8JR9wHasNh08/view?usp=drive_link', type: 'car' },
  { name: '高千穗神樂', url: 'https://drive.google.com/open?id=1yHbMi56Cq1JLoFDRubRLmNT-58q_fvlE' },
];

export const PrepView: React.FC<PrepViewProps> = ({ checkedItems, toggleItem, list, setList }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [modalText, setModalText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleOpenAdd = () => {
    setModalMode('add'); setModalText(''); setEditingId(null); setShowModal(true);
  };
  const handleOpenEdit = (item: ChecklistItem) => {
    setModalMode('edit'); setModalText(item.text); setEditingId(item.id); setShowModal(true);
  };
  const handleSubmit = (text: string) => {
    if (modalMode === 'add') {
      setList([...list, { id: `todo_${Date.now()}`, text }]);
    } else if (editingId) {
      setList(list.map(i => i.id === editingId ? { ...i, text } : i));
    }
  };
  const confirmDelete = () => {
    if (deleteId) { setList(list.filter(i => i.id !== deleteId)); setDeleteId(null); }
  };

  return (
    <div className="pb-4 pt-4 animate-fade-in-soft space-y-9">

      {/* Travel Notes */}
      <section className="bg-ios-card border border-ios-separator shadow-ios-card rounded-ios-lg overflow-hidden">
        <div className="px-5 pt-5 pb-3.5 flex items-center gap-2.5">
          <div className="w-1 h-4 bg-mag-gold rounded-full" />
          <h3 className="text-[17px] font-semibold text-ios-label leading-none tracking-tight">旅途叮嚀</h3>
        </div>
        <div className="px-5 pb-6 space-y-4">
          {PRE_TRIP_NOTES.map((note, idx) => (
            <div key={idx} className="flex gap-3.5 items-start">
              <div className="w-6 h-6 rounded-full bg-mag-gold-light flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[11px] font-bold font-mono text-mag-gold leading-none">{idx + 1}</span>
              </div>
              <p className="text-[14px] text-ios-label leading-relaxed flex-1 pt-0.5 tracking-tight">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vouchers */}
      <section>
        <div className="px-1 mb-2 flex items-center gap-2">
          <div className="w-1 h-3.5 bg-mag-gold rounded-full" />
          <h2 className="text-[13px] font-semibold text-ios-label-2">旅遊憑證</h2>
        </div>
        <div className="bg-ios-card rounded-ios-lg shadow-ios-card border border-ios-separator overflow-hidden divide-y divide-ios-separator">
          {VOUCHERS.map((voucher, idx) => (
            <a key={idx} href={voucher.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3.5 active:bg-ios-fill-3 transition-colors">
              {voucher.type === 'hotel'
                ? <BedIcon className="w-5 h-5 text-mag-gold shrink-0" />
                : voucher.type === 'car'
                  ? <CarIcon className="w-5 h-5 text-mag-gold shrink-0" />
                  : voucher.type === 'train'
                    ? <TrainIcon className="w-5 h-5 text-mag-gold shrink-0" />
                    : <SheetIcon className="w-5 h-5 text-mag-gold shrink-0" />
              }
              <span className="flex-1 text-[15px] font-medium text-ios-label">{voucher.name}</span>
              <ExternalLinkIcon className="w-4 h-4 text-ios-label-3 shrink-0" />
            </a>
          ))}
        </div>
      </section>

      {/* Todo Checklist */}
      <section>
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-[13px] font-semibold text-ios-label-2 tracking-wide">待辦事項</h2>
          <button
            onClick={handleOpenAdd}
            aria-label="新增待辦"
            className="min-w-[44px] min-h-[44px] -mr-2 flex items-center justify-center text-mag-gold active:opacity-60"
          >
            <div className="w-9 h-9 rounded-full bg-mag-gold-light flex items-center justify-center">
              <PlusIcon className="w-5 h-5" />
            </div>
          </button>
        </div>

        <div className="bg-ios-card rounded-ios-lg shadow-ios-card border border-ios-separator overflow-hidden divide-y divide-ios-separator">
          {list.map((item) => {
            const isChecked = checkedItems.has(item.id);
            return (
              <div key={item.id} className="flex items-center pl-3 pr-1">
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-label={isChecked ? '取消勾選' : '勾選'}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0 active:opacity-60"
                >
                  <span className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all ${isChecked ? 'bg-mag-gold border-mag-gold' : 'bg-white border-ios-separator-strong'}`}>
                    {isChecked && <CheckIcon className="w-3.5 h-3.5 text-white" />}
                  </span>
                </button>
                <span
                  onClick={() => toggleItem(item.id)}
                  className={`flex-1 text-[15px] py-3.5 leading-snug cursor-pointer select-none tracking-tight ${isChecked ? 'text-ios-label-3 line-through' : 'text-ios-label font-medium'}`}
                >
                  {item.text}
                </span>
                <button onClick={() => handleOpenEdit(item)} aria-label="編輯" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-ios-label-3 active:text-mag-gold">
                  <EditIcon className="w-[18px] h-[18px]" />
                </button>
                <button onClick={() => setDeleteId(item.id)} aria-label="刪除" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-ios-label-3 active:text-ios-red">
                  <TrashIcon className="w-[18px] h-[18px]" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <TextInputSheet
        open={showModal}
        mode={modalMode}
        initialText={modalText}
        title={{ add: '新增待辦事項', edit: '編輯待辦事項' }}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
      />
      <ConfirmDeleteSheet
        open={!!deleteId}
        title="確定要刪除此項目？"
        onClose={() => setDeleteId(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};
