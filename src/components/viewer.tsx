import { useSelector } from 'react-redux';
import { selectGenerator } from './generatorSlice';

export default function Viewer() {
    const generatorParameters = useSelector(selectGenerator);
    return(
        <div className='flex-space-between'>
            <h1>{generatorParameters.password}</h1>
            <button className='viewerButton' onClick={() => {navigator.clipboard.writeText(generatorParameters.password)}} aria-label='Copy password button' >
            </button>
        </div>
    )
}