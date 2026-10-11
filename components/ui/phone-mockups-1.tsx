import React from "react";
import {
  ImageItem,
  PhoneCarousel,
  PhoneCarouselProps,
} from "@/components/ui/phone-mockups-1-utils/phone-carousel";

const exampleImages: ImageItem[] = [
  {
    src: "https://res.cloudinary.com/harshitproject/image/upload/v1746774805/Behance-screen.png",
    alt: "Behance app on iPhone",
  },
  {
    src: "https://res.cloudinary.com/harshitproject/image/upload/v1746774805/Notion-screen.png",
    alt: "Notion app on iPhone",
  },
  {
    src: "https://res.cloudinary.com/harshitproject/image/upload/v1746774806/One-screen.png",
    alt: "One app on iPhone",
  },
  {
    src: "https://res.cloudinary.com/harshitproject/image/upload/v1746774807/Reddit-nj7hwh.png",
    alt: "Reddit app on iPhone",
  },
];

export interface PhoneMockupBasicProps extends Partial<PhoneCarouselProps> {}

export default function PhoneMockupBasic(props: PhoneMockupBasicProps) {
  return <PhoneCarousel images={props.images || exampleImages} {...props} />;
}

export { PhoneMockupBasic };
