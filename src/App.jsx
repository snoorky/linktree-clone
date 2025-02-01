import { useEffect, useState } from "react"
import { DragDropContext, Droppable } from "@hello-pangea/dnd"

import Header from "./components/Header"
import Profile from "./components/Profile"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Social from "./components/Social"

export default function App() {
  const [cards, setCards] = useState([])
  const normalLinks = cards.filter((item) => item.type === "normal")
  const socialLinks = cards.filter((item) => item.type !== "normal")

  useEffect(() => {
    const local = localStorage.getItem("cards")
    if (local) {
      setCards(JSON.parse(local))
    }
  }, [])

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem("cards", JSON.stringify(cards))
    }
  }, [cards])

  const addLink = (newLink) => {
    setCards(prevCards => [...prevCards, newLink])
  }

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const sourceList = result.source.droppableId;

    if (sourceList === "cards") {
      const updateLinks = reorder(normalLinks, result.source.index, result.destination.index);
      setCards([...updateLinks, ...socialLinks]);
      return
    }

    if (sourceList === "socials") {
      const updateLinks = reorder(socialLinks, result.source.index, result.destination.index);
      setCards([...normalLinks, ...updateLinks]);
      return
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#189D8A] to-[#6985C0] flex flex-col items-center justify-between p-4 space-y-4">
      <Header addLink={addLink} />
      <div className="w-full flex flex-col items-center">
        <Profile />
        <section className="w-full md:max-w-xl">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="cards" type="list" direction="vertical">
              {(provided) => (
                <article className="w-full flex flex-col items-center justify-center space-y-4" ref={provided.innerRef} {...provided.droppableProps}>
                  {normalLinks.map((item, index) => (
                    <Card key={item.id} item={item} index={index} />
                  ))}
                  {provided.placeholder}
                </article>
              )}
            </Droppable>
          </DragDropContext>
        </section>
        <div className="w-full md:max-w-xl">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="socials" type="list" direction="horizontal">
              {(provided) => (
                <article className="w-full flex justify-center mt-4 space-x-2" ref={provided.innerRef} {...provided.droppableProps}>
                  {socialLinks.map((item, index) => (
                    <Social key={item.id} item={item} index={index} />
                  ))}
                  {provided.placeholder}
                </article>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
      <Footer />
    </div>
  )
}
