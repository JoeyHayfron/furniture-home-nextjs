"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import DiscoverSectionImage from "@/app/images/collections-discover-section-image.png";
import Button from "@/components/Button";
import InfiniteScrollView from "@/components/InfiniteScrollView";
import { INFINITE_SCROLL_VIEW_CHILD_VIEWS } from "@/helpers/constants";
import Select from "react-select";

export default function Collection() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <h1 className="font-[family-name:var(--font-cormorant)] text-[70px] text-black mt-[85px] text-center">
        Popular Collection
      </h1>

      {/* FILTERS SECTION */}
      <div className="flex w-[100%] items-center justify-center mt-10 mb-10 gap-6">
        <Select
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
          ]}
          placeholder="Type"
          styles={{
            control: (base, state) => ({
              ...base,
              width: "200px",
            }),
          }}
        />
        <Select
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
          ]}
          placeholder="Price"
          styles={{
            control: (base, state) => ({
              ...base,
              width: "200px",
            }),
          }}
        />
        <Button customStyle={{ background: "#fff", color: "#817f7f" }}>
          Clear All
        </Button>
      </div>
      {/* END FILTERS SECTION */}

      {/* SCROLL VIEW SECTION */}
      <InfiniteScrollView
        baseUrl=""
        childComponent={INFINITE_SCROLL_VIEW_CHILD_VIEWS.COLLECTION_ITEM}
      />
      {/* END SCROLL VIEW SECTION */}

      {/* DISCOVER SECTION */}
      <div className="w-[100%] h-[403px] flex items-center px-[10%]">
        <div className="w-[60%] h-[100%] bg-black text-white pl-[53px] pt-[49px]">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[43px] w-[70%] leading-[45px] font-[500]">
            Discover our new accessories collection
          </h2>
          <p className="text-[14px] font-[300] font-[family-name:var(--font-poppins)] mt-[10px] pr-[75px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis nisi eu ultricies hendrerit. Fusce massa ligula, suscipit
            sit amet porta in, consectetur ut sem. Maecenas velit velit,
            tincidunt quis risus non, imperdiet egestas mauris. Ut efficitur
            orci ligula, vehicula fermentum ante volutpat ut.
          </p>
          <Button
            customStyle={{
              backgroundColor: "#FFFFFF",
              color: "#000",
              marginTop: "25px",
            }}
          >
            Learn More
          </Button>
        </div>
        <Image
          src={DiscoverSectionImage}
          alt="discover-section"
          className="h-[100%]"
        />
      </div>
      {/* END DISCOVER SECTION */}

      <Footer />
    </div>
  );
}
