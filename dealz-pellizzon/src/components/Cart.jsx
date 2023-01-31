import { BsBag } from "react-icons/bs";

const Cart = () => {
    
  return (
    <div className="relative cursor-pointer">
      <button>
        <BsBag className="text-3xl" />
        <div className="absolute top-0 w-full h-full flex items-center">
          <p className="text-sm font-bold w-full">1</p>
        </div>
      </button>
    </div>
  );
};

export default Cart;