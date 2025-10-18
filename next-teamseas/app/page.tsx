import Image from "next/image";
import Navbar from "./components/navbar";
import BackgroundImage from "./components/backgroundImage";
import ContrastTextbox from "./components/contrastBox";
import Header from "./components/headerComponent";
import SubHeader from "./components/subHeaderComponent";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <BackgroundImage alt="seas" src="/BackgroundImage.png"></BackgroundImage>

      <div>
        <ContrastTextbox>
          <SubHeader>Verdens hav er i fare.</SubHeader>
          <Header>Det er opp til oss å redde dem.</Header>
          <SubHeader>#TeamSeas er en frivillig organisasjon som fokuserer på Sjø og Hav-konservasjon.</SubHeader>
        </ContrastTextbox>

        <Image src={"/Volunteer.jpg"} height={400} width={400} alt="volunteerImage"></Image>
      </div>
    </div>
  );
}
