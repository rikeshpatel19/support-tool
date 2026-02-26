import { X } from 'lucide-react';

const PassageModal = ({ isOpen, onClose, title, author, synopsis, text }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-3xl border-4 border-black flex flex-col overflow-hidden shadow-hard">
        {/* Header */}
        <div className="p-4 border-b-4 border-black flex justify-between items-center bg-gray-50">
          <h2 className="font-black uppercase text-xl">Reading Passage</h2>
          {/* X (Close) Button */}
          <button
            onClick={onClose}
            className="bg-red-500 border-3 border-black p-1.5 rounded-full w-8 h-8 z-10 hover:bg-red-600 shadow-medium"
          >
            <X size={20} className="text-white" strokeWidth={3} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto leading-relaxed">
          <h3 className="text-lg mb-2">Read this passage carefully, then answer the questions</h3>
          <h1 className="whitespace-pre-wrap text-bold text-3xl">{title}</h1>
          <h2 className="whitespace-pre-wrap mb-2 font-bold text-lg">by {author}</h2>
          <div className="whitespace-pre-wrap mb-2 p-2 italic text-lg border-2 border-black rounded-xl">{synopsis}</div>
          <div className="whitespace-pre-wrap text-lg">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default PassageModal;

