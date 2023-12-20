import Section from "./Section";
import { useState } from "react";
const Accordion = ()=> {

 const [AccordionState, setAccordionState] = useState("Two");

    return(<div>
    <Section title="One" isVisible={AccordionState === "One"} setIsVisible = {setAccordionState}  />
    <Section title="Two" isVisible={AccordionState === "Two"} setIsVisible = {setAccordionState}/>
    <Section title="Three" isVisible={AccordionState === "Three"} setIsVisible = {setAccordionState}/>
    </div>);
}
export default Accordion;