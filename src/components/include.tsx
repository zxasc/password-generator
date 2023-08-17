import { useSelector, useDispatch } from 'react-redux';
import { changePassword, changeEntropy, selectGenerator, toggleCharacters } from './generatorSlice';
import { useRef } from 'react'

export default function Include({ name, type, isDefaultChecked }) {
    const checkboxRef = useRef();
    const dispatch = useDispatch();

    const toggleCheckbox = function() {
        dispatch(toggleCharacters({id: checkboxRef.current.id, checked: checkboxRef.current.checked}))
    }

    return(
        <article>
            <input type="checkbox" name={type} id={type} defaultChecked={isDefaultChecked} ref={checkboxRef} onChange={() => toggleCheckbox()}/>
            <label className='include-label' htmlFor={type}>Include {name}</label>
        </article>
    )
}