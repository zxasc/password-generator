import { useSelector, useDispatch } from 'react-redux';
import { changePassword, changeLength, changeEntropy, selectGenerator } from './generatorSlice';
import { useEffect } from "react"

export default function Generate() {
    const generatorParameters = useSelector(selectGenerator);
    const dispatch = useDispatch();
    useEffect(() => {
        generatePassword();
    }, [])

    // Durstenfeld shuffle
    const shuffleArray = function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const generatePassword = function(){
        // Create an array of all possible characters
        let selectedCharacters: string[] = [];
        generatorParameters.characters.map(characterSet => {
            if(characterSet.enabled === true) {
                let arr = selectedCharacters.concat(characterSet.set);
                selectedCharacters = arr;
            }
        })
        // Check if character pool is empty
        if (selectedCharacters.length === 0) {
            alert("Please include at least one set of characters.")
            return
        }
        // Shuffle possible characters and randomly select n of them
        const shuffledCharacters = shuffleArray(selectedCharacters);
        const generatedPasswordArray = []
        for(let i = 0; i < generatorParameters.length; i++) {
            const randomNum = Math.floor(Math.random() * shuffledCharacters.length)
            generatedPasswordArray.push(shuffledCharacters[randomNum]);
        }
        const generatedPasswordString = generatedPasswordArray.join("").toString();
        // Calculate password strength
        const entropy = generatedPasswordString.length * Math.log2((selectedCharacters.length));
        dispatch(changeEntropy(entropy));
        dispatch(changePassword(generatedPasswordString));
    }

    return(
        <button className='generateButton' onClick={() => generatePassword()}>
            GENERATE
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
            </svg>
        </button>
    )
}