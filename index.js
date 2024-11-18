import Accordion, { AccordionItem } from '../components/Accordion';
import { AccordionHeader } from '../components/AccordionHeader';
import { AccordionPanel } from '../components/AccordionPanel';

export default function Home() {
  return (
    <div style={{ width: '300px', margin: 'auto' }}>
      <Accordion>
        <AccordionItem>
          <AccordionHeader>Section 1</AccordionHeader>
          <AccordionPanel>Contenu de la section 1</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>Section 2</AccordionHeader>
          <AccordionPanel>Contenu de la section 2</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>Section 3</AccordionHeader>
          <AccordionPanel>Contenu de la section 3</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}