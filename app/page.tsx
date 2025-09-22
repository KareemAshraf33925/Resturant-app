import dynamic from "next/dynamic";
import Feedback from "@/components/ui/Feedback";
const Hero=dynamic(
  ()=>import ("@/components/ui/Hero"),
  {
    loading:()=><h1>Loading...</h1>,
    ssr:true
  }
)
const Quality=dynamic(
  ()=>import ("@/components/ui/Quality"),
  {
    loading:()=><h1>Loading...</h1>,
    ssr:true
  }
)
const ChooseUs=dynamic(
  ()=>import ("@/components/ui/ChooseUs"),
  {
    loading:()=><h1>Loading...</h1>,
    ssr:true
  }
)


export default function Home() {
  return (
    <>
    <Hero/>
    <Quality/>
    <ChooseUs/>
    <Feedback/>
    </>
  );
}
