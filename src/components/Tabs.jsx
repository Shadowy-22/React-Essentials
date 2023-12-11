export default function Tabs({children, buttons, ButtonsContainer = "menu"}) {
    // Re-mapped to be able to use the same name as the prop: 
    // const ButtonsContainer = buttonsContainer; 
    // Or you could simply use the exact name of the prop that it must start with UPPERCASE or else it will get confused with a built-in HTML element.

    return (
        <>  
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}