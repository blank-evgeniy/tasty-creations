import { StaticImageData } from "next/image";

export interface Category {
  path: string;
  name: string;
  image: StaticImageData;
}
