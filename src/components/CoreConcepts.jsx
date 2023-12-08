import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';
import Section from './Section.jsx';

export default function CoreConcepts(){
    const coreConceptItems = CORE_CONCEPTS.map((conceptItem) => {
        return <CoreConcept 
          key={conceptItem.id}
          {...conceptItem}
        /> 
    })

    return  (
        <Section id="core-concepts">
        <h2>Core Concepts</h2>
            <ul>
                {coreConceptItems}
            </ul>
        </Section>
    )
}