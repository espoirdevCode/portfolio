
import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import SectionServices from "./components/ui/SectionServices";
import FloatingButton from "./components/ui/FloatingButton";
import Footer from "./components/ui/Footer";
import { SectionSolde } from "./components/ui/SectionSolde";
import SectionContact from "./components/ui/SectionContact";
import SectionMentor from "./components/ui/sectionMentor";


const Index = () => {

  return (
    <div className={` h-full pb-10 md:pt-32 md:pb-10 overflow-x-hidden `}>
      <Header />
      <Hero />
      <SectionServices />
      <SectionSolde />
      <SectionContact />
      <SectionMentor />
      <div className=" hidden">
        <FloatingButton />
      </div>
      <Footer />
    </div>
  )
}



export default Index;
