import Image from "next/image";
import Banner from "@/components/Banner";
import styles from "./page.module.css";
import ProductCard from '@/components/ProductCard'
import { TravelCard } from "@/components/TravelCard";

export default function Home() {
  return (
    <main>
      <Banner/>
      <TravelCard/>
    </main>
  );
}
