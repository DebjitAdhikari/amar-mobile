export default function LanguagePopup({ onSelect }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-[9999]">
      <div className="bg-white text-black rounded-2xl p-8 text-center shadow-lg w-80 animate-fadeIn">
        <h2 className="text-xl font-semibold mb-6">Choose Your Language</h2>

        <div className="flex justify-around">
          <button
            onClick={() => onSelect("en")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            English
          </button>
          <button
            onClick={() => onSelect("bn")}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            বাংলা
          </button>
        </div>
      </div>
    </div>
  );
}
