import React, { useState, useCallback } from "react";
import { CHARACTERS } from "../../constants/characters";
import styles from "./Characters.module.scss";
import { Heading } from "../../components/Heading";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { AnchorLink } from "../../components/AnchorLink";

export const Characters = () => {
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
      <Heading level={1}>Characters</Heading>
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
    </>
  );
};
