import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Navbar from "./Navbar";
import styles from "./mainHeader.module.css";
import MainHeaderBg from "./MainHeaderBg/MainHeaderBg";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBg />

      <header className={styles.header}>
        <Link href={"/"} className={styles.logo}>
          <Image
            src={logo}
            alt="Logo for Foodies"
            width={80}
            height={80}
            priority
          />
          Nextlevel Food
        </Link>
        <Navbar />
      </header>
    </>
  );
};

export default MainHeader;
