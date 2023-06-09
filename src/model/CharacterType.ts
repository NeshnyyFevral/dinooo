import { ref } from 'vue';

export interface CharacterType {
    x: number;
    y: number;
    speed: number;
    isJumping: boolean;
    isFailing: boolean;
}

export const useCharacter = (x: number = 0, y: number = 0, speed: number = 0) => {
  const character = ref<CharacterType>({
    x,
    y,
    speed,
    isFailing: false,
    isJumping: false,
  });

  const jump = () => {
    character.value.isJumping = true;
  };

  return { characterData: character, jump };
};