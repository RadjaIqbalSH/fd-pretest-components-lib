import { ICard } from '../../typings/Card';

const Card = ({ keyIndex, className, starIcon, starIconFill, data }: ICard) => {
  return (
    <div
      data-cy="card"
      key={keyIndex}
      className={['h-fit rounded-lg bg-white', className, data.skinType ? 'px-4 py-8' : ''].join(
        ' ',
      )}
    >
      <div className="aspect-square w-full bg-white relative">
        <img
          data-cy="card-img"
          className="w-full h-full object-contain"
          src={data.productUrl}
          alt="Product image"
        ></img>
      </div>
      {data.skinType && (
        <p
          data-cy="card-skin-type"
          className="w-full font-semibold text-sm mt-4 text-red-500 truncate"
        >
          {data.skinType}
        </p>
      )}
      <div className="flex items-center space-x-2 mt-2">
        <p data-cy="card-rate">{data.rate}</p>
        <div className="flex items-center">
          {Array.from(Array(5), (value: any, index: number) => {
            if (index + 1 <= data.stars) return <span key={index}>{starIconFill}</span>;
            else return <span key={index}>{starIcon}</span>;
          })}
        </div>
        <p data-cy="card-reviews">({data.reviews})</p>
      </div>
      <p data-cy="card-product-name" className="mt-2 w-full text-lg font-bold truncate ">
        {data.productName}
      </p>
      <p data-cy="card-product-description" className="w-full line-clamp-2">
        {data.productDescription}
      </p>
      <p data-cy="card-product-color" className="w-full truncate text-black-300">
        {data.productColor}
      </p>
    </div>
  );
};

export default Card;
