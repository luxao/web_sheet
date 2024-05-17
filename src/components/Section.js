import HeadingSection from "./HeadingSection"
import HtmlCard from "./HtmlCard"
import dataObj from "../assets/Data";


export default function Section() {
    return <section className="max-w-full max-h-fit h-96 border-b-2">
        <HeadingSection heading="Carousel Example" info="Infinity carousel" ></HeadingSection>
        <HtmlCard htmlContent={dataObj.codes[0].htmlCode} />
    </section>
}