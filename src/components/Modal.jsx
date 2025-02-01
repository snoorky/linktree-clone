import { useState } from "react"

export default function Modal({ addLink, closeModal }) {
  const [title, setTitle] = useState("")
  const [link, setLink] = useState("")
  const [linkType, setLinkType] = useState("normal")

  const handleSave = () => {
    if (title && link) {
      addLink({ id: String(Date.now()), title, link, type: linkType, })
      closeModal();
    }
  };

  return (
    <div className="fixed w-full flex justify-center bottom-0 left-0 z-1 slideIn">
      <div className="w-full md:max-w-xl bg-white flex flex-col p-6 rounded-t-xl shadow-sm inset-shadow-sm shadow-black">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800">Add Link</h1>
        <span className="mb-2 text-sm text-gray-500">Please enter the link below.</span>
        <input className="bg-gray-100 mb-4 py-3 px-4 rounded-md text-sm text-gray-700 border border-gray-300 outline-none"
          type="text" name="title" id="title" placeholder="Enter title of link" onChange={(e) => setTitle(e.target.value)} />
        <input className="bg-gray-100 mb-4 py-3 px-4 rounded-md text-sm text-gray-700 border border-gray-300 outline-none"
          type="text" name="link" id="link" placeholder="Enter URL here" onChange={(e) => setLink(e.target.value)} />
        <label className="mb-2 text-sm text-gray-500">Link Type:</label>
        <select className="bg-gray-100 mb-4 py-3 px-4 rounded-md text-sm text-gray-700 border border-gray-300 outline-none appearance-none"
          value={linkType} onChange={(e) => setLinkType(e.target.value)}>
          <option value="normal">Normal Link</option>
          <option value="" disabled>Select a Social Network</option>
          <option value="instagram">Instagram</option>
          <option value="spotify">Spotify</option>
          <option value="tiktok">TikTok</option>
          <option value="twitter">Twitter</option>
          <option value="youtube">YouTube</option>
        </select>
        <button className="w-full bg-blue-500 py-2 px-6 text-white rounded-md" onClick={handleSave}>Add</button>
      </div>
    </div>
  )
}
