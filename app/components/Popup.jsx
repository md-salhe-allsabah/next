"use client";

import { useState } from "react";

export default function CardPopupDemo() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Card One",
      summary: "Click to view details",
      details: "Here is the full content for Card One inside the popup modal.",
      color: "bg-indigo-600",
    },
    {
      id: 2,
      title: "Card Two",
      summary: "Click to view details",
      details: "Here is the full content for Card Two inside the popup modal.",
      color: "bg-emerald-600",
    },
    {
      id: 3,
      title: "Card Three",
      summary: "Click to view details",
      details: "Here is the full content for Card Three inside the popup modal.",
      color: "bg-rose-600",
    },
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Click a Card</h1>

      {/* Card Grid / Stack */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className={`${card.color} text-white p-6 rounded-xl shadow-md cursor-pointer transition-all duration-150 hover:-translate-y-1 active:scale-95`}
          >
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="text-sm opacity-90 mt-2">{card.summary}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal (Only renders when a card is selected) */}
      {selectedCard && (
        <div
          onClick={() => setSelectedCard(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          {/* Popup Card Content (stopPropagation prevents closing when clicking inside) */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-gray-900 rounded-2xl max-w-md w-full p-6 shadow-2xl transform transition-all scale-100"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedCard.title}</h2>
              <button
                onClick={() => setSelectedCard(null)}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold px-2 active:scale-90"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-600 mb-6">{selectedCard.details}</p>

            <button
              onClick={() => setSelectedCard(null)}
              className={`w-full ${selectedCard.color} text-white py-2.5 rounded-lg font-semibold transition-transform active:scale-95`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
