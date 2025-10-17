import Image from "next/image";
import Navbar from "./components/navbar";
import BackgroundImage from "./components/backgroundImage";
import ContrastTextbox from "./components/contrastTextbox";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <BackgroundImage alt="seas" src="/BackgroundImage.png"></BackgroundImage>

      <div>
        <ContrastTextbox>
          <p>test</p>
        </ContrastTextbox>
      </div>
    </div>
  );
}
