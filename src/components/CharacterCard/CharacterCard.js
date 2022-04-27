import React from "react";
import { ReactComponent as Like } from "./assets/heart.svg";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./CharacterCard.module.scss";
import { Heading } from "../Heading";
import { Text } from "../Text";

export const CharacterCard = ({
  id,
  name,
  description,
  path,
  humanName,
  isLike,
  onLikeCard,
}) => {
  const handleLike = () => {
    onLikeCard(id);
  };

  return (
    <div className={styles.root}>
      <img src={path} alt="Spider-Man" className={styles.cardImage} />
      <div className={styles.cardDetails}>
        <Heading level={2} className={styles.cardName}>
          {name}
        </Heading>
        <Heading level={4} className={styles.cardHumanName}>
          {humanName}
        </Heading>
        <Text className={styles.cardDescription}>{description}</Text>

        <div className={styles.cardMeta}>
          <div
            className={cn(styles.like, {
              [styles.active]: isLike,
            })}
            onClick={handleLike}
          >
            <Like />
          </div>
          <div className={styles.readBio}>
            <a href="#">Read bio</a>
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  humanName: PropTypes.string,
  isLike: PropTypes.bool,
  onLikeCard: PropTypes.func,
};
