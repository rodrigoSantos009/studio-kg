import { Button } from "@/components/ui/button";

import styles from "./side-menu.module.css"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Scissors } from "lucide-react";
import ButtonOutline from "../ButtonOutline";
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <MenuIcon size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader className="border-b border-b-slate-200 mb-2">
          <SheetTitle className="mb-4 flex items-center justify-center">
              <Scissors height={20} /> KATIA GORNIAK
          </SheetTitle>
        </SheetHeader>
        <ul className={styles.ul}>
          <li className={styles.item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link href="/services">Serviços</Link>
          </li>
          <li className={styles.item}>
            <Link href="/about">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link href="">Contatos </Link>
          </li>
        </ul>
        <ButtonOutline title="Agendar" url="" />
      </SheetContent>
    </Sheet>
  );
}
