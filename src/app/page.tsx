import BootSequence from "@/components/BootSequence";
import CustomCursor from "@/components/CustomCursor";
import CursorGlow from "@/components/CursorGlow";
import FilmGrain from "@/components/FilmGrain";
import SmoothScroll from "@/components/SmoothScroll";
import WorkshopFloor from "@/components/workshop/WorkshopFloor";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <BootSequence />
      <CursorGlow />
      <CustomCursor />
      <FilmGrain />
      <WorkshopFloor />
    </>
  );
}
