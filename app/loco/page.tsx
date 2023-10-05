"use client";
import React from "react";
import Image from "next/image";
import portrait from "@/public/images/16.jpg";
import "../components/ContainerImage.css";
import ContainerImage from "../components/ContainerImage";
// to touch css class properties

const loco = () => {
  return (
    <>
      <div className="w-3/4 py-10 text-slate-500">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus facere labore
          aperiam adipisci, illo voluptatibus. Quae numquam nostrum consequuntur
          eum rem nemo!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus facere labore
          aperiam adipisci, illo voluptatibus. Quae numquam nostrum consequuntur
          eum rem nemo!
        </p>
      </div>
      <ContainerImage src={portrait} alt="portrait" />
      <div>
        <h1>loco</h1>
      </div>
      <div className="w-3/4 py-10 text-slate-500">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus facere labore
          aperiam adipisci, illo voluptatibus. Quae numquam nostrum consequuntur
          eum rem nemo!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus facere labore
          aperiam adipisci, illo voluptatibus. Quae numquam nostrum consequuntur
          eum rem nemo!
        </p>
      </div>

      <div className="imgBloc">
        <Image
          src={portrait}
          alt="maison moderne bardage"
          width="300"
          height="100"
          // className="object-cover"
          // sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          // priority
        />
      </div>
      <div className="w-3/4 py-10 text-slate-500">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus facere labore
          aperiam adipisci, illo voluptatibus. Quae numquam nostrum consequuntur
          eum rem nemo!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus facere labore
          aperiam adipisci, illo voluptatibus. Quae numquam nostrum consequuntur
          eum rem nemo!
        </p>
      </div>
      <div className="w-3/4 py-10 text-slate-500">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus facere labore
          aperiam adipisci, illo voluptatibus. Quae numquam nostrum consequuntur
          eum rem nemo!
        </p>
        <ContainerImage src={portrait} alt="portrait" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus facere labore
          aperiam adipisci, illo voluptatibus. Quae numquam nostrum consequuntur
          eum rem nemo!
        </p>
      </div>
    </>
  );
};

export default loco;
