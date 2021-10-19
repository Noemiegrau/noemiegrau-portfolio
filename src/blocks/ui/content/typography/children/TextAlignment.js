import React from "react"
import {PrismCode} from "../../../../../components/prsimjs/Prismjs";


const TextAlignment = () => {
    return (
        <div id="text-alignment">
            <h4>Text alignment</h4>

            <div className="bd-example">
                <p className="text-left">Left aligned text on all viewport sizes.</p>
                <p className="text-center">Center aligned text on all viewport sizes.</p>
                <p className="text-right">Right aligned text on all viewport sizes.</p>

                <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
            </div>

            <PrismCode
                code={'<p className="text-left">Left aligned text on all viewport sizes.</p>\n' +
                '<p className="text-center">Center aligned text on all viewport sizes.</p>\n' +
                '<p className="text-right">Right aligned text on all viewport sizes.</p>\n' +
                '\n' +
                '<p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>'
               }
                language="html"
                plugins={["line-numbers"]}
            />
        </div>
    );
};

export default TextAlignment;
