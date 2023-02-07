import TopSection from "./components/topSection";
import Content from "./components/content";
import { useState } from "react";
import Footer from "./components/footer";
import RadioButton from "./components/radio-buttons";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      body: "Milk",
      checked: false,
    },
    {
      id: 2,
      body: "Cucumber",
      checked: false,
    },
    {
      id: 3,
      body: "Chocolate",
      checked: false,
    },
  ]);

  const [newItem, setNewItem] = useState("");

  const addItem = (body) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const structureOfNewItem = { id, body, checked: false };
    const itemsArr = [...items, structureOfNewItem];
    setItems(itemsArr);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (!newItem) return;

    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <div className="app-body">
        <TopSection handleClick={handleClick} setNewItem={setNewItem} />
        <Content items={items} />
        <Footer />
        <RadioButton />
      </div>
    </div>
  );
}

export default App;
