import Hero from "../components/landing_page/hero";
import SummerPrograms from "../components/landing_page/summer_programs";
import Mission from "../components/landing_page/mission";
import WorkWithTeachers from "../components/landing_page/workwithteachers";
import WorkingWithStudents from "../components/landing_page/workingwithstudents";
import CallToAction from "../components/landing_page/calltoaction";

function Index() {
  return (
    <>
      <Hero />
      <SummerPrograms />
      <Mission />
      <WorkWithTeachers />
      <WorkingWithStudents />
      <CallToAction />
    </>
  );
}

export default Index;
