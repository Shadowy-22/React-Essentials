import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import TabButton from './TabButton.jsx';
import Tabs from './Tabs.jsx';
import Section from './Section.jsx'

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState('');

    // This function is passed as value to the prop of TabButton Component.
    function handleSelect(selectedButton){ 
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;

    if(selectedTopic){
        tabContent = (
        <div id ="tab-content"> 
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
        </div>)
    }

    return(
        <Section id="examples" title="Examples">
            {/* Two important Prop patterns: 
                1- Passing a component identifier as a value for a prop and using it to dynamically render different HTML elements.
                2- Working with multiple JSX slots 
                3- Setting Default Props Values    
            */}
            <Tabs 
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton> 
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton> 
                        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton> 
                        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton> 
                    </>
                }
            >
                {tabContent}
            </Tabs> 
        </Section>
    )
}