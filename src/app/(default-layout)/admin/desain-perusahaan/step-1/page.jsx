"use client";
import TransitionLink from "@/components/TransitionLink";
import Link from "next/link";
// import InputLists from "@/components/InputLists";
import { useState } from "react";

function InputLists({ entries, setEntries }) {
  const handleChange = (index, field, value) => {
    const updated = [...entries];
    updated[index][field] = value;
    setEntries(updated);
  };

  // const [isDisabled, setIsDisabled] = useState(false);

  const addEntry = () => {
    setEntries([...entries, { name: "", address: "", editable: false }]);
  };

  function handleClick(index) {
    if (entries[index].editable == true) {
      const updated = [...entries];
      updated[index].editable = false;
      setEntries(updated);
    } else {
      const updated = [...entries];
      updated[index].editable = true;
      setEntries(updated);
    }
  }

  const deleteEntry = (index) => {
    setEntries((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full gap-2 flex flex-col">
      {entries.map((entry, index) => (
        <div key={index} className="flex gap-2">
          <input type="text" disabled={entry.editable} value={entry.name} onChange={(e) => handleChange(index, "name", e.target.value)} placeholder="Nama" className="input" />
          <input type="text" disabled={entry.editable} value={entry.address} onChange={(e) => handleChange(index, "address", e.target.value)} placeholder="Alamat" className="input" />
          <button type="button" onClick={() => handleClick(index)} className="btn btn-warning">
            Edit
          </button>
          <button type="button" className="btn btn-error" onClick={() => deleteEntry(index)}>
            Delete
          </button>
        </div>
      ))}
      <button type="button" onClick={addEntry} className="btn btn-primary col-span-2">
        Tambah
      </button>
    </div>
  );
}

function Step1Page() {
  const [entries, setEntries] = useState([{ name: "", address: "", editable: true }]);

  const handleSubmit = () => {
    console.log(entries); // Semua inputan kamu ada di sini
  };
  return (
    <form data-transition-page data-animate="enter" className="fade-in-up fade-out-up px-8 py-4">
      <div className="card-body rounded-box shadow-sm bg-base-100">
        <h1 className="font-medium text-2xl">Informasi Perusahaan</h1>
        <h2 className="text-2xl">1. Sebutkan nama perusahaan dan negara tempat beroperasi</h2>
        <div className="flex justify-center mt-5">
          {/* <button type="button" className="bg-blue-800 hover:bg-blue-700 items-center rounded-3xl p-2 text-white w-24">
              Tambah
            </button> */}
          <InputLists entries={entries} setEntries={setEntries} />
        </div>
        <TransitionLink href="/admin/desain-perusahaan/step-2" className="btn btn-success ml-auto" onClick={handleSubmit}>
          Simpan & Lanjut
        </TransitionLink>
      </div>
    </form>
  );
}

export default Step1Page;
