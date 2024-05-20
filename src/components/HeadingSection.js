
export default function HeadingSection(props) {
    return <div className="section-heading-wrap">
        <h1 className="section-heading">{ props.heading }</h1>
        <span className="section-heading-span">{ props.info }</span>
    </div>    
}