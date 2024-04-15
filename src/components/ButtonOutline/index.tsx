'use client';

import { Button } from "@radix-ui/themes";

import styles from "./button-outline.module.css"
import { useRouter } from "next/navigation";

interface Props {
  title: string
  url: string
}

const ButtonOutline = ({ title, url }: Props ) => {
  const router = useRouter();
  return ( 
    <Button variant="outline"  className={styles.button} onClick={() => router.push(`${url}`)}>
      {title}
    </Button>  
  );
}
 
export default ButtonOutline;