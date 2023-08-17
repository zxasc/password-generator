import { useSelector } from "react-redux"
import { selectGenerator } from "./generatorSlice"

export default function StrengthText() {
    const generatorParameters = useSelector(selectGenerator);
    const entropy = generatorParameters.entropy;

    let text = ""

    if(entropy >= 95) {
        text = "STRONG"
    } else if (entropy >= 65) {
        text = "MEDIUM"
    } else if (entropy >= 30) {
        text = "WEAK"
    } else {
        text = "POOR"
    }

    return(
        <p className="strengthText">{text}</p>
    )
}