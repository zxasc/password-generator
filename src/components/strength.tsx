import { useSelector } from "react-redux"
import { selectGenerator } from "./generatorSlice"
import StrengthText from "./strengthText";
import StrengthColumn from "./strengthColumn";

export default function Strength() {
    const generatorParameters = useSelector(selectGenerator);
    const entropy = generatorParameters.entropy;

    return(
        <article className="sub-row darkgray-bg flex-space-between">
            <p className="strengthParagraph">STRENGTH</p>
            <StrengthText />
            <div className="flex-space-between strengthColumn-wrapper">
                <StrengthColumn
                    empty={false}
                />
                <StrengthColumn
                    empty={entropy >= 30 ? false : true}
                />
                <StrengthColumn
                    empty={entropy >= 65 ? false : true}
                />
                <StrengthColumn
                    empty={entropy >= 95 ? false : true}
                />
            </div>
        </article>
    )
}