// app/components/AddToCart.tsx

"use client";

interface Props {
  label: string;
}

const BtnUrlConstructor = ({ label }: Props) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => console.log("Click")}>
        {label}
      </button>
    </div>
  );
};

export default BtnUrlConstructor;
