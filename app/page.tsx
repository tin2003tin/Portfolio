import Image from "next/image";
import { Content } from "./components/content/content";
import { SideBar } from "./components/sidebar/sidebar";

export default function Home() {
  return (
      <>
        <Content></Content>
        <SideBar></SideBar>
      </>
  );
}
