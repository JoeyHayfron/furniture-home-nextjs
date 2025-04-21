"use client";
import BreadCrumbComponent from "@/components/BreadCrumbComponent";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";
import { useState } from "react";
import Select from "react-select";
import { options } from "../../all/page";
import Button from "@/components/Button";

export default function CollectionDetailPage() {
  const [rating, setRating] = useState(0);
  const BreadCrumbLevels = [
    {
      id: 1,
      label: "Home",
      route: "/",
    },
    {
      id: 2,
      label: "Collection",
      route: "/",
    },
    {
      id: 3,
      label: "Item",
      route: "/",
    },
  ];

  const RatingStyles = {
    itemShapes: ThinRoundedStar,
    activeFillColor: "#3e80f6",
    inactiveFillColor: "#fbf1a9",
  };

  return (
    <div>
      <div className="w-[100%] px-[38px] py-[22px]">
        <BreadCrumbComponent levels={BreadCrumbLevels} />
        <div className="flex gap-10">
          <div className="w-[45%] flex gap-8">
            <Image
              src="https://rickandmortyapi.com/api/character/avatar/361.jpeg"
              width={475}
              height={475}
              className="w-[75%]"
              alt="rick-and-morty"
            />
            <div className="w-[25%] flex flex-col justify-between">
              <Image
                src="https://rickandmortyapi.com/api/character/avatar/361.jpeg"
                width={475}
                height={475}
                className="bg-slate-600 w-[100%] h-[30%] cursor-pointer"
                alt="rick-and-morty"
              />
              <Image
                src="https://rickandmortyapi.com/api/character/avatar/361.jpeg"
                width={475}
                height={475}
                className="bg-slate-600 w-[100%] h-[30%] cursor-pointer"
                alt="rick-and-morty"
              />
              <Image
                src="https://rickandmortyapi.com/api/character/avatar/361.jpeg"
                width={475}
                height={475}
                className="bg-slate-600 w-[100%] h-[30%] cursor-pointer"
                alt="rick-and-morty"
              />
            </div>
          </div>
          <div className="w-[55%] flex flex-col">
            <div className="flex justify-between items-center">
              <p className="font-[family-name:var(--font-cormorant)] text-[42px]">
                Flower Vase
              </p>
              <p className="font-[family-name:var(--font-poppins)] font-[600] text-[18px]">
                $ 29.99
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <Rating
                style={{ maxWidth: 130 }}
                value={5}
                onChange={setRating}
                readOnly
                spaceBetween="small"
                itemStyles={RatingStyles}
              />
              <p className="font-[family-name:var(--font-poppins)] text-[15px] font-[500] text-[#6c757d] mt-1 ml-[-17px]">
                5.00 | 20 reviews
              </p>
            </div>
            <p className="font-[family-name:var(--font-poppins)] mt-[18px] text-[#6C757D] text-[14px]">
              Dolor purus non enim praesent. At quis risus sed vulputate odio
              ut. Quis risus sed vulputate odio ut enim volutpat. Ornare arcu
              odio ut sem nulla pharetra diam sit. Augue neque gravida in
              fermentum et sollicitudin ac orci phasellus.
            </p>

            <>
              <h3 className="mt-10 ">Color</h3>
              <Select
                options={options}
                placeholder="Price"
                styles={{
                  control: (base, state) => ({
                    ...base,
                    width: "150px",
                  }),
                }}
              />
            </>
            <>
              <h3 className="mt-5">Quantity</h3>
              <Select
                options={options}
                placeholder="Price"
                styles={{
                  control: (base, state) => ({
                    ...base,
                    width: "100px",
                  }),
                }}
              />
            </>

            <Button customStyle={{ width: "30%", marginTop: "40px" }}>
              Add to Cart
            </Button>

            <div className="flex gap-4 mt-4">
              <p>Pay in 21 days</p> <p>30 days return policy</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
