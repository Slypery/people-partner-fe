"use client";
import TransitionLink from "@/components/TransitionLink";
import { useState } from "react";

const initialCards = [
  {
    title: "Tipe Kontrak",
    items: [
      { text: "Executive", checked: true },
      { text: "PKWTT(Total)", checked: true },
      { text: "PKWT(Kontrak)", checked: true },
      { text: "Pekerja Harian Lepas", checked: true },
      { text: "Alih Daya", checked: true },
      { text: "PHL - Daily Worker", checked: true },
      { text: "PHL - Casual", checked: true },
      { text: "Probation", checked: true },
      { text: "Magang/Intern", checked: true },
      { text: "Trainee", checked: true },
      { text: "Praktik Kerja Lapangan", checked: true },
    ],
  },
  {
    title: "Tipe Jadwal Kerja",
    items: [
      { text: "Shift", checked: true },
      { text: "Non-Shift", checked: true },
    ],
  },
  {
    title: "Hari Kerja",
    items: [
      // {text: "", checked: }
      { text: "5 hari kerja 2 hari libur", checked: true },
      { text: "6 hari kerja 1 hari libur", checked: true },
    ],
  },
  {
    title: "Tempat Kerja",
    items: [
      { text: "Kantor (WFO)", checked: true },
      { text: "Rumah (WFH)", checked: true },
      { text: "Hybird 4-1", checked: true },
      { text: "Hybird 3-2", checked: true },
      { text: "Hybird 2-3", checked: false },
      { text: "Hybird 1-4", checked: false },
    ],
  },
  {
    title: "Sistem Penggajian",
    items: [
      { text: "Bulanan", checked: true },
      { text: "Mingguan", checked: true },
      { text: "Harian", checked: true },
      { text: "Per Proyek", checked: true },
    ],
  },
  {
    title: "Bahasa & Format Waktu",
    items: [
      { text: "Indonesia", checked: true },
      { text: "English", checked: true },
      { text: "Zona Waktu(GMT +7)", checked: true },
      { text: "Tanggal (DD-MM-YYYY)", checked: true },
    ],
  },
];

function ButtonAddItem({ children, onClick }) {
  return (
    <button className="btn btn-sm btn-outline" onClick={onClick}>
      {children}
    </button>
  );
}

function Step7Page() {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [cards, setCards] = useState(initialCards);

  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const saveItem = () => {
    if (currentCardIndex !== null && currentEditIndex !== null && tempValue.trim() !== "") {
      const updated = [...cards];
      updated[currentCardIndex].items[currentEditIndex].text = tempValue;
      setCards(updated);
    }
    setCurrentCardIndex(null);
    setCurrentEditIndex(null);
    setTempValue("");
  };

  const handleAddItem = (cardIndex) => {
    const updated = [...cards];
    updated[cardIndex].items.push({ text: "Item baru", checked: false });
    setCards(updated);
  };

  //   const handleAddItem = (cardIndex) => {
  //     const updated = [...cards];
  //     updated[cardIndex].items.push("Item baru");
  //     setCards(updated);
  //   };

  const toggleCheckbox = (cardIndex, itemIndex) => {
    const updated = [...cards];
    updated[cardIndex].items[itemIndex].checked = !updated[cardIndex].items[itemIndex].checked;
    setCards(updated);
    console.log(updated[cardIndex]);
  };

  return (
    <div data-transition-page data-animate="enter" className="w-full px-8 py-4 fade-in-up fade-out-pop-up">
      <div className="w-full mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body overflow-x-auto">
            <h2 className="card-title text-2xl">7. Aturan Dasar HR</h2>
            <div className="mt-0">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* KIRI: Select Perusahaan */}
                <div className="w-full lg:w-1/3">
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text font-bold">Pilih Perusahaan</span>
                    </div>
                    <select className="select select-bordered" value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
                      <option disabled value="">
                        -- Pilih Perusahaan --
                      </option>
                      <option>PT A</option>
                      <option>PT B</option>
                      <option>PT C</option>
                    </select>
                  </label>
                </div>
                {/* Grid Card */}
                <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cards.map((card, cardIndex) => (
                    <div className="card bg-base-100 shadow-md w-full min-h-[200px]" key={cardIndex}>
                      <div className="card-body">
                        <div className="bg-blue-500 border-b border-blue-500 px-4 py-2 rounded-t-box">
                          <h2 className="card-title text-lg">{card.title}</h2>
                        </div>

                        <ul className="space-y-2 mb-2  border border-blue-500 rounded-md p-2">
                          {card.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center border-b border-gray-200 pb-2 mt-2 gap-2">
                              <input type="checkbox" className="checkbox checkbox-sm" onChange={() => toggleCheckbox(cardIndex, itemIndex)} checked={item.checked} />
                              {currentCardIndex === cardIndex && currentEditIndex === itemIndex ? (
                                <input
                                  type="text"
                                  className="input input-sm input-bordered w-full"
                                  value={tempValue}
                                  autoFocus
                                  onChange={(e) => setTempValue(e.target.value)}
                                  onBlur={saveItem}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") saveItem();
                                  }}
                                />
                              ) : (
                                <span
                                  className="w-full cursor-pointer"
                                  onClick={() => {
                                    setCurrentCardIndex(cardIndex);
                                    setCurrentEditIndex(itemIndex);
                                    setTempValue(item.text);
                                  }}
                                >
                                  {item.text}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>

                        {/* Tombol Tambah */}
                        <ButtonAddItem onClick={() => handleAddItem(cardIndex)}>Tambah {card.title}</ButtonAddItem>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-4 flex gap-2">
              <TransitionLink href="step-6" className="btn btn-info ml-auto">
                Kembali
              </TransitionLink>
              <TransitionLink href="step-8" className="btn btn-success">
                Simpan & Lanjut
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step7Page;
