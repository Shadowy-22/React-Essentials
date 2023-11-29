export default function TabButton({children, onSelect, isSelected}) {
    // Convention: Starting with "on" makes it clear that this prop should be set to a function that will ultimately be triggered based on some event.
    
    return (
        <li>
            <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
        </li>
    )
}