import React from 'react';
import { Section } from './types';
import { dynamicChoiceButton } from './styles';

interface ShowChoicesProps {
  section: Section;
  questionIndex: number;
  onChoiceSelect: (choice: string) => void;
}

const ShowChoices: React.FC<ShowChoicesProps> = ({ section, questionIndex, onChoiceSelect }) => {
  const question = section.questions[questionIndex];

  return (
    <div>
      {section.choices.map((choice, index) => (
        <button
          key={`${question.id}-${index}`}
          type="button"
          css={dynamicChoiceButton(index)} // 色を動的に適用
          onClick={() => onChoiceSelect(choice)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
};

export default ShowChoices;