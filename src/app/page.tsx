import CustomCursor from "@/components/CustomCursor";
import CursorGlow from "@/components/CursorGlow";
import FilmGrain from "@/components/FilmGrain";
import WorkshopFloor from "@/components/workshop/WorkshopFloor";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <CustomCursor />
      <FilmGrain />
      <WorkshopFloor />
    </>
  );
}
