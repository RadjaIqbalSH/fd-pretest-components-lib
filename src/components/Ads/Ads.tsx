import { IAds } from '../../typings/Ads';

const Ads = ({ label, label2, className }: IAds) => {
  return (
    <div
      data-cy="ads"
      className={[
        'bg-black-100 border-2 border-black-200 flex flex-col items-center justify-center',
        className,
      ].join(' ')}
    >
      <p data-cy="ads-label-1" className="text-2xl font-bold text-black-400">
        {label}
      </p>
      {label2 && (
        <p data-cy="ads-label-2" className="text-2xl font-bold text-black-400">
          {label2}
        </p>
      )}
    </div>
  );
};

export default Ads;
