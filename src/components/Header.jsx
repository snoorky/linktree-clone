import { useState } from "react"
import Icon from "./Icon"
import Modal from "./Modal"

export default function Header({ addLink }) {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(previous => !previous)
  }

  return (
    <div className="w-full md:max-w-xl h-10 flex justify-end">
      <div className="relative w-10 h-full flex items-center justify-center" >
        <div className="absolute w-10 h-full bg-black rounded-full opacity-40"></div>
        <button onClick={toggleModal}>
          <Icon name="dots" className="relative w-6 stroke-white" />
          </button>
      </div>
      {showModal && <Modal addLink={addLink} closeModal={toggleModal} />}
    </div >
  )
}
