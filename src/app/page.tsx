import Image from "next/image";
import HomeHeroSection from "@/components/HomeHeroSection";
import Button from "@/components/Button";
import CollectionItem from "@/components/CollectionItem";
import feedbackImage from "./images/feedback-image.webp";
import feedbackLeaf from "./images/feedback-mask.svg";
import quotationMarkStart from "./images/quotation-mark-start.svg";
import quotationMarkEnd from "./images/quotation-mark-end.svg";
import socialLeaf from "./images/social-leaf.svg";
import Footer from "@/components/Footer";

export const dItems = [
  {
    id: 1,
    name: "Flower Vase",
    price: 29.99,
    img: "https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/fv1.png?alt=media&token=b5e6e293-15c5-4179-8af2-3378fb043813",
  },
  {
    id: 2,
    name: "Bookshelf",
    price: 119.99,
    img: "https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/bs1.png?alt=media&token=040fa92c-93dd-48d3-971e-b77a099cb4dc",
  },
  {
    id: 3,
    name: "Table Chair",
    price: 180.34,
    img: "https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/tc1.png?alt=media&token=3b13731c-f0ba-47f7-88c6-60754610a8e9",
  },
  {
    id: 4,
    name: "Wall Clock",
    price: 20.14,
    img: "https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/wc1.png?alt=media&token=94f53948-9604-4b6d-b1d4-aba316a97f02",
  },
  {
    id: 5,
    name: "Round Table",
    price: 24.99,
    img: "https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/rt1.png?alt=media&token=52e7aa36-93ec-4351-b2f1-3ad385b94d14",
  },
  {
    id: 6,
    name: "Pottery Vase",
    price: 24.99,
    img: "https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/pv1.png?alt=media&token=13099e08-29f3-4cc7-809e-2e792c94390a",
  },
  {
    id: 7,
    name: "Wooden Sofa",
    price: 140.22,
    img: "https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/ws1.png?alt=media&token=7ca9f169-fae6-4a0b-a1b1-8ad33741132d",
  },
  {
    id: 8,
    name: "Black chair",
    price: 160.34,
    img: "https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/bc1.png?alt=media&token=8dff8169-37ce-454b-9788-c619d7c1c99a",
  },
];

export default function Home() {
  return (
    <div className="bg-white h-screen w-full">
      {/* HERO SECTION */}
      <HomeHeroSection />
      <div id="square-boxes-hero" className="mt-[-30px] ml-[108px] z-60">
        <div className="h-[60px] w-[60px] bg-[#ddf3f4] mix-blend-multiply"></div>
        <div className="h-[40px] w-[40px] bg-[#ddf3f4] mix-blend-multiply absolute mt-[-15px] ml-[45px]"></div>
      </div>
      {/* HERO SECTION END */}

      {/* WHAT WE DO SECTION  */}
      <section
        id="what-we-do-section"
        className="mt-[80px] text-center w-full flex flex-col items-center"
      >
        <h2 className="font-[family-name:var(--font-cormorant)] text-[70px] text-center">
          What We Do
        </h2>
        <p className="text-center leading-[25px] font-[300] text-[14px] mt-[16px] max-w-[800px]">
          Our Focus: Crafting Inspiring Living Spaces. At{" "}
          <b className="font-[600]">Furniture home</b>, we are dedicated to
          turning ordinary spaces into visual masterpieces. With a passion for
          design, we collaborate closely with you to bring your unique vision to
          life. From color palettes to furniture arrangement, our decor experts
          ensure each corner tells a captivating story.
        </p>
        <p className="text-center leading-[25px] mt-[9px] font-[300] text-[14px] max-w-[800px]">
          Whether your style is contemporary, classic, or eclectic, let us
          expertly transform your dreams into stunning reality. Discover the art
          of creating lovely environments that truly resonate and inspire, as we
          skillfully turn houses into homes and rooms into reflections of you.
        </p>
        <Button customStyle={{ marginTop: "36px" }}>Learn More</Button>
      </section>
      {/* WHAT WE DO SECTION END */}

      {/* POPULAR COLLECTION SECTION */}
      <section
        id="popular-collection-section"
        className="mt-[146px] text-center w-full flex flex-col items-center pb-[40px] px-[45px]"
      >
        <h2 className="font-[family-name:var(--font-cormorant)] text-[70px] text-center">
          Popular Collection
        </h2>
        <div className="flex flex-wrap w-[80%] gap-x-[20px] gap-y-[85px] justify-center">
          {dItems.map((item) => (
            <CollectionItem
              id={item?.id}
              name={item?.name}
              price={item?.price}
              img={item?.img}
              key={item.id}
            />
          ))}
        </div>
      </section>
      {/* POPULAR COLLECTION SECTION END */}

      {/* FEEDBACK SECTION */}
      <section
        id="user-feedback-section"
        className="mt-[68px] w-full pr-11 flex flex-col items-center"
      >
        <div className="h-[595px] w-[80%] bg-[#faefee] relative mix-blend-multiply">
          <div
            id="square-boxes-hero"
            className="z-30 absolute right-5 bottom-[97.5%]"
          >
            <div className="h-[60px] w-[60px] bg-[#f5dfde] mix-blend-multiply"></div>
            <div className="h-[40px] w-[40px] bg-[#f0d1d0] mix-blend-multiply absolute mt-[-15px] ml-[-25px]"></div>
          </div>
          <div className="flex">
            <Image
              className="absolute right-0 bottom-0"
              src={feedbackLeaf}
              alt="feedback-leaf"
            />
            <Image
              src={feedbackImage}
              height={461}
              width={492}
              alt="feedback"
              className="mt-[5%] ml-[-45px]"
            />
            <div className="w-[580px] ml-[136px] self-center z-40 mr-[85px] top-[50%] translate-y-[20%]">
              <h2 className="text-[50px] font-[family-name:var(--font-cormorant)] leading-[48px]">
                Redefining Living Spaces with Furniture home
              </h2>
              <p className="mt-[26px] font-[family-name:var(--font-poppins)] text-[14px]">
                <Image
                  src={quotationMarkStart}
                  alt="quotation-mark"
                  className="inline"
                />{" "}
                They expertly turned my space into a haven of style and comfort.
                Every design element seemed to reflect my vision, creating an
                atmosphere that resonated with my dreams. The seamless blend of
                creativity and elegance has truly made my home an inspiring
                sanctuary.{" "}
                <Image
                  src={quotationMarkEnd}
                  alt="quotation-mark"
                  className="inline"
                />
              </p>
              <Button customStyle={{ marginTop: "35px" }}>Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      {/* FEEDBACK SECTION END */}

      {/* INSTAGRAM SECTION */}
      <section
        id="instagram-section"
        className="mt-[91px] h-[599px] w-full flex flex-col items-center"
      >
        <div className="w-[80%] h-full flex justify-center relative">
          <Image
            src={socialLeaf}
            alt="social-leaf"
            className="absolute self-center z-10"
          />
          <div className="translate-y-[20%]">
            <p className="text-[74px] font-[family-name:var(--font-cormorant)] text-center">
              INSTAGRAM
            </p>
            <p className="text-center text-[22px] font[family-name:var(--font-poppins)]">
              #furniturehome
            </p>
          </div>
          <div id="left-side" className="z-50 absolute left-0 top-[70px]">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/fv1.png?alt=media&token=b5e6e293-15c5-4179-8af2-3378fb043813"
              alt="flower-vase"
              width={206}
              height={218}
              className="h-[218px] w-[206px]"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/ws1.png?alt=media&token=7ca9f169-fae6-4a0b-a1b1-8ad33741132d"
              alt="wooden-sofa"
              width={149}
              height={157}
              className="h-[157px] w-[149px] absolute left-[153px] top-[155px] shadow-md"
            />
          </div>
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%]">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/tc1.png?alt=media&token=3b13731c-f0ba-47f7-88c6-60754610a8e9"
              alt="chair"
              width={175}
              height={185}
              className="h-[185px] w-[175px]"
            />
          </div>

          <div id="right-side" className="z-50 absolute right-0 top-[70px]">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/wc1.png?alt=media&token=94f53948-9604-4b6d-b1d4-aba316a97f02"
              alt="wall-clock"
              width={206}
              height={218}
              className="h-[218px] w-[206px]"
            />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/furniture-shop-web-app.appspot.com/o/rt1.png?alt=media&token=52e7aa36-93ec-4351-b2f1-3ad385b94d14"
              alt="round-table"
              width={149}
              height={157}
              className="h-[157px] w-[149px] z-20 absolute right-[153px] top-[175px] shadow-md"
            />
          </div>
        </div>
      </section>
      {/* INSTAGRAM SECTION END */}

      {/* FOOTER SECTION */}
      <Footer />
      {/* FOOTER SECTION END */}
    </div>
  );
}
