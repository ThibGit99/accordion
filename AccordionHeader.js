export function AccordionHeader({ children, onToggle, isOpen, index }) {
  return (
    <h3>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${index}`}
        style={{
          background: 'none',
          border: 'none',
          padding: '10px',
          width: '100%',
          textAlign: 'left',
          cursor: 'pointer',
        }}
      >
        {children}
        <span style={{ marginLeft: '10px' }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
    </h3>
  );
}