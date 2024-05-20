import HeadingSection from "./HeadingSection"
import HtmlCard from "./HtmlCard"
import dataObj from "../assets/Data";


export default function Section() {
    return <section className="section-wrap">
        <HeadingSection heading="Carousel Example" info="Infinity carousel" ></HeadingSection>
        <HtmlCard htmlContent={dataObj.codes[0].htmlCode} />
    </section>
}