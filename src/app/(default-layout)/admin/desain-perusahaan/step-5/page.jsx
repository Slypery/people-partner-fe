"use client";
import TransitionLink, { navigateTo } from "@/components/TransitionLink";
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

function ButtonAddItem({ children, onClick, type }) {
    return (
        <button type={type} className="btn btn-sm btn-info" onClick={onClick}>
            {children}
        </button>
    );
}

function DesainPerusahaanStep5Page() {

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

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo('step-6');
    }

    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="pr-8 py-4 pl-14 w-full gap-x-3 gap-y-2 grid grid-cols-[auto_1fr] max-md:grid-cols-1 fade-in-up fade-out-up">
            <div className="col-span-full">
                <h2 className="flex gap-2 text-2xl col-span-full -ml-6">
                    5.
                    <span>
                        Selanjutnya, buatlah struktur organisasi dasar
                    </span>
                </h2>
                <div className="mt-0 w-full">
                    {/* KIRI: Select Perusahaan */}
                    <div className="w-full flex md:w-1/4 mb-5">
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
                    <div className="w-full">
                        <div className="grid -ml-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cards.map((card, cardIndex) => (
                                <div className="" key={cardIndex}>
                                    <div className="card-body">
                                        <div className="bg-primary border-primary text-primary-content border-b  px-4 py-2 rounded-md">
                                            <h2 className="card-title text-lg">{card.title}</h2>
                                        </div>
                                        <ul className="space-y-2 mb-2 rounded-md p-2">
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
                                        <ButtonAddItem type="button" onClick={() => handleAddItem(cardIndex)}>Tambah {card.title}</ButtonAddItem>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-end card-actions col-span-full">
                <TransitionLink href="step-4" className="btn btn-info">
                    Kembali
                </TransitionLink>
                <button type="submit" className="btn btn-success">
                    Simpan & Lanjut
                </button>
            </div>
        </form>

    );
}

export default DesainPerusahaanStep5Page;
