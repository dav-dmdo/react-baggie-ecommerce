import { XMarkIcon } from "@heroicons/react/24/outline";
const OrderCard = (props) => {
  const { title, price, images, handleDelete, id } = props;

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={images[0]}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        {handleDelete && (
          <XMarkIcon
            className="w-6 h-6 text-black-600 cursor-pointer"
            onClick={() => handleDelete(id)}
          ></XMarkIcon>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
