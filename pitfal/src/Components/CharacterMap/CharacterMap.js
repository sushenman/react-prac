import React,{memo,useMemo} from 'react';
import PropTypes from 'prop-types';

function itemize(text){
    const letters = text.split('')
      .filter(l => l !== ' ')
      .reduce((collection, item) => {
        const letter = item.toLowerCase();
        return {
          ...collection,
          [letter]: (collection[letter] || 0) + 1
        }
      }, {})
      return Object.entries(letters)
      .sort((a, b) => b[1] - a[1]);
}


function CharacterMap({ text, showExplanation }) {
    const characters = useMemo(() => itemize(text), [text]);
    return(
        <div>
             {showExplanation &&
        <p>
          This display a list of the most common characters.
        </p>
      }
      Character Map:
      {characters.map(character => (
        <div key={character[0]}>
          {character[0]}: {character[1]}
        </div>
      ))}
      </div>
    )
  }

CharacterMap.propTypes = {
    showExplanation: PropTypes.bool.isRequired,

  text: PropTypes.string.isRequired
}

export default memo(CharacterMap);