'use client';

import styles from "./header-top.module.css";
import { SheetDemo } from "../SideMenu";
import { Scissors } from "lucide-react";
import { useRouter } from "next/navigation";

const HeaderTop = () => {
  const router = useRouter();

  return (
    <div className={styles.mainTop}>
      <header className={styles.header}>
        <nav
          className="flex items-center justify-between"
        >
          <div>
            <p className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
              <Scissors height={20} /> KATIA GORNIAK
            </p>
          </div>
          <SheetDemo />
        </nav>
      </header>
    </div>
  );
}
 
export default HeaderTop;