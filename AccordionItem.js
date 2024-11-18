export function AccordionItem({ children, isOpen, onToggle, index }) {
  return (
    <div role="presentation">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen,
          onToggle,
          index,
        })
      )}
    </div>
  );
}