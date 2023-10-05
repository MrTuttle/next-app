"use client";
import React from "react";
import Image from "next/image";
import portrait16 from "@/public/images/16.jpg";
import portrait1 from "@/public/images/1.jpg";
import portrait3 from "@/public/images/3.jpg";
import portrait13 from "@/public/images/13.jpg";
import "../components/ContainerImage.css";
import ContainerImage from "../components/ContainerImage";
// to touch css class properties

const loco = () => {
  return (
    <>
      <section>
        <div className="w-3/4 py-10 text-slate-500">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>
        </div>
        <ContainerImage src={portrait16} alt="portrait" />
        <div>
          <h1>loco</h1>
        </div>
        <div className="w-3/4 py-10 text-slate-500">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>
        </div>
      </section>
      <section>
        <div className="w-3/4 py-10 text-slate-500">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>
        </div>
      </section>
      <section>
        <ContainerImage src={portrait1} alt="portrait" />

        <div className="w-3/4 py-10 text-slate-500">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium deleniti dolore nemo
            aliquid quam! Amet, fugiat? Ducimus facere labore aperiam adipisci,
            illo voluptatibus. Quae numquam nostrum consequuntur eum rem nemo!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>
        </div>
      </section>
      <section>
        <div className="w-3/4 py-10 text-slate-500">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>
          <ContainerImage src={portrait13} alt="portrait" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>
        </div>
        <div className="w-3/4 py-10 text-slate-500">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>
          <ContainerImage src={portrait16} alt="portrait" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium deleniti dolore nemo aliquid quam! Amet, fugiat? Ducimus
            facere labore aperiam adipisci, illo voluptatibus. Quae numquam
            nostrum consequuntur eum rem nemo!
          </p>
        </div>
      </section>
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
        <ContainerImage src={portrait3} alt="portrait" />
      </div>
    </>
  );
};

export default loco;
