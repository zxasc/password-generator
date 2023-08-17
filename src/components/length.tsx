import { useSelector, useDispatch } from 'react-redux';
import { changeLength, selectGenerator } from './generatorSlice';
import { useRef, useEffect } from "react"

export default function Length() {
    const generatorParameters = useSelector(selectGenerator);
    const dispatch = useDispatch();
    const lengthSlider = useRef();
    

    const updateLength = function(e) {
        const percentage = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100;
        e.target.style.setProperty('--slider-percentage', `${percentage}%`);
        const selectedLength = lengthSlider.current.valueAsNumber;
        dispatch(changeLength(selectedLength));
    }

    return(
        <article>
            <div className='flex-space-between'>
                <label className='length-label' htmlFor="lengthSlider">Character Length</label><span className='length-span'>{generatorParameters.length}</span>
            </div>
            <input type="range" name="lengthSlider" id="lengthSlider" ref={lengthSlider} min={4} max={40} defaultValue={16} onChange={() => updateLength(event)}/>
        </article>
    )
}