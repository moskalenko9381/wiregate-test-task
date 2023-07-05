import Image from 'next/image'
import styles from './page.module.css'
import React from "react";
import * as dotenv from "dotenv";
import dynamic from 'next/dynamic'
import NoSsrWrapper from "@/app/signup/components/NoSsrWrapper";
dotenv.config({ path: __dirname+'/.env' });
console.log("ssr value", process.env.NEXT_SSR_ENABLED)

export default function Home() {
  return (
      <NoSsrWrapper>
    <main className={styles.main}>
      Hii
    </main>
      </NoSsrWrapper>
  )
}
