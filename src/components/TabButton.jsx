export default function TabButton({children, isSelected, ...props}) {
    // Convention: Starting with "on" makes it clear that this prop should be set to a function that will ultimately be triggered based on some event.
    // Example: onClick, onChange, onSubmit, onMouseOver, onMouseOut, etc.

    // Use of Forward Props to just simply pass the onClick event to this.

    return (
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
        </li>
    )
}