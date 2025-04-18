
import { useState } from "react";

export const Fruit = () => {
  const [fruits, setFruits] = useState([
    {
      id: crypto.randomUUID(),
      name: "Apple",
      price: 5,
    },
    {
      id: crypto.randomUUID(),
      name: "Ricec",
      price: 6,
    },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addFruit = (obj) => {
    const newFruit = {
      id: crypto.randomUUID(),
      name: obj.name,
      price: Number(obj.price),
    };
    setFruits([...fruits, newFruit]);
  };

  const removeFruit = (id) => {
    setFruits(fruits.filter((fruit) => fruit.id !== id));
  };

  const createFruit = (e) => {
    e.preventDefault();
    addFruit({ name, price });
    setName("");
    setPrice("");
  };

  return (
    <>
      <form onSubmit={createFruit}>
        <h2>Adiciona nova fruta</h2>

        <label htmlFor="name">Nome: </label>
        <input
          required
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="price">Preço: </label>
        <input
          required
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Adiciona fruta</button>
      </form>

      <section>
        <h2>Carrinho de compras</h2>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit.id}>
              <p>Nome: {fruit.name}</p>
              <p>Preço: {fruit.price} €</p>
              <button onClick={() => removeFruit(fruit.id)}>Remover</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};