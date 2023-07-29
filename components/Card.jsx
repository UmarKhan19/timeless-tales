import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className=" cursor-pointer relative h-[280px]   rounded-lg shadow-2xl">
      <div className="absolute w-full -z-[1] h-full ">
        <Image
          alt="card"
          width={1080}
          height={1080}
          src={data.image}
          className="w-full rounded-lg brightness-[60%] h-full object-cover object-top"
        />
      </div>
      <div className="text-[#fed690]  p-5  font-playFair">
        <h2 className="text-[24px] font-semibold font-montserrat py-4">
          {data.heading}
        </h2>
        <p className=" text-[18px] leading-8 line-clamp-[5] ">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Card;

// bg-[#f49b01]
