import React, { useState, useEffect } from "react";
import {collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config"
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  const [cards, setCards] = useState([]);
  const cardsRef = collection(db, "cards");

  useEffect(() => {
    async function fetchCards() {
      const snapshot = await getDocs(cardsRef);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCards(data);
    }
    fetchCards();
  }, []);

  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cards.map((card) => (
              <CardItem
                key={card.id}
                src={card.image}
                text={card.description}
                label={card.label}
                path={card.path}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
