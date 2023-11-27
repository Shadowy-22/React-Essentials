import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

const coreConceptElements = CORE_CONCEPTS.map((concept) => {
    return <CoreConcept {...concept}/> 
})

function App() {
  return (
    <div>
      <Header /> 
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {coreConceptElements}
          </ul>
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
