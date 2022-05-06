import React, { useState, useCallback } from "react";
import { Slider } from "../../components/Slider";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { CHARACTERS } from "../../constants/characters";
import styles from "./Main.module.scss";

export const Main = () => {
  const [characters, setCharacters] = useState(CHARACTERS);

  const onLikeCard = useCallback((id) => {
    setCharacters((prev) =>
      prev.map((character) =>
        character.id === id
          ? { ...character, isLike: !character.isLike }
          : character
      )
    );
  }, []);
  return (
    <>
      <Slider />
      <section className={styles.cardSection}>
        <Container>
          <div className={styles.cardTitle}>
            <Heading backLine>Marvel cards</Heading>
            <Heading level={2}>Collect your est five</Heading>
          </div>
          <div className={styles.cardWrapper}>
            {characters.map((el) => (
              <CharacterCard
                key={el.id}
                id={el.id}
                name={el.name}
                description={el.description}
                path={el.thumbnail.path}
                humanName={el.humanName}
                isLike={el.isLike}
                onLikeCard={onLikeCard}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
