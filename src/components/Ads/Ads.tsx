import { IAds } from '../../typings/Ads';

const Ads = ({ label, label2, className }: IAds) => {
  return (
    <div
      className={[
        'bg-black-100 border-2 border-black-200 flex flex-col items-center justify-center',
        className,
      ].join(' ')}
    >
      <p className="text-2xl font-bold text-black-400">{label}</p>
      {label2 && <p className="text-2xl font-bold text-black-400">{label2}</p>}
    </div>
  );
};

export default Ads;
