export function AccordionPanel({ children, isOpen, index }) {
  return (
    <div
      id={`panel-${index}`}
      role="region"
      aria-labelledby={`accordion-header-${index}`}
      hidden={!isOpen}
      style={{ padding: '10px 20px', display: isOpen ? 'block' : 'none' }}
    >
      {children}
    </div>
  );
}