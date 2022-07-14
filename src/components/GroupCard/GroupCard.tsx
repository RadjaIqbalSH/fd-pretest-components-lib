import { IGroupCard } from '../../typings/GroupCard';

const GroupCard = ({ keyIndex, className, icon1, icon2, icon3, data }: IGroupCard) => {
  return (
    <div
      className={[
        'flex flex-col items-center p-8 bg-white rounded-lg drop-shadow-xl',
        className,
      ].join(' ')}
      key={keyIndex}
    >
      <div className="w-40 h-40 rounded-full bg-red-200">
        <img
          className="w-full h-full object-center object-cover"
          src={data.avatarUrl}
          alt="group avatar"
        />
      </div>
      <p className="mt-4 text-xl font-bold w-full text-center truncate">{data.title}</p>
      <div className="w-full mt-8 flex items-center justify-around">
        {icon1}
        {icon2}
        {icon3}
      </div>
      <p className="w-full text-sm text-center mt-2 line-clamp-2">{data.description}</p>
    </div>
  );
};

export default GroupCard;
