'use client';

import { Button } from "@radix-ui/themes";
import styles from "./button-normal.module.css"
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  title: string
  url: string
}

const ButtonNormal = ({ title, url }: Props) => {
  const router = useRouter();

  return (
    <Button className={styles.button} onClick={() => router.push(`${url}`)}>
      {title}
      <ArrowUpRight className={styles.icon} />
    </Button>
  );
}
 
export default ButtonNormal;