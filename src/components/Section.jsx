export default function Section({title, children, ...props}) {
    // Use of Forwarded Props to not have to write all the props manually.
    return (
        <section {...props} >
            <h2>{title}</h2>
            {children}
        </section>
    )
}