import { useState } from 'react';
import styles from './Carrusel.module.scss';

const cardsData = [
  {
    id: 1,
    image: '/carrousel/car-wash.jpg',
    description: 'Aplicación web para autolavado',
  },
  {
    id: 2,
    image: '/carrousel/hospitalapp.png',
    description: 'Aplicación web para hospital',
  },
  {
    id: 3,
    image: '/carrousel/clothingstoreapp.webp',
    description: 'Tienda en línea, Ecommerce',
  },
  {
    id: 4,
    image: '/carrousel/food.jpg',
    description: 'Página promocional de restaurante',
  },
];

export default function Carousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;
  const [cardsList, setCardsList] = useState(cardsData);

  const [image, setImage] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const goToPrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - visibleCards : prevIndex - 1
    );
  };

  const goToNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + visibleCards >= cardsData.length ? 0 : prevIndex + 1
    );
  };

  const handleImageChange = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  const handlePublish = () => {
    if (!image || !description.trim()) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const newCard = {
      id: cardsList.length + 1,
      image,
      title,
      description,
    };

    setCardsList([newCard, ...cardsList]);
    setImage(null);
    setTitle("");
    setDescription("");
  };


  return (
    <div className={styles.container}>
      <button onClick={goToPrevious} className={styles.container__arrow}>&lt;</button>
      <div className={styles.container__content}>
        {cardsList.slice(startIndex, startIndex + visibleCards).map((card) => (
          <div key={card.id} className={styles.container__content__box}>
            <img src={card.image} alt={card.description} />
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <button onClick={goToNext} className={styles.container__arrow}>&gt;</button>

      <div className={styles.container__contentadd}>
        <div>
          <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
            <div>
              {image ? (
                <img src={image} alt="Perfil" />
              ) : (
                <span>📷 Subir Foto</span>
              )}
            </div>
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        <textarea
          placeholder="Ingresa tu comentario"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handlePublish}>Publicar</button>
      </div>
    </div>
  );
}
