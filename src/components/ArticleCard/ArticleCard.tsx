import { IArticleCard } from '../../typings/ArticleCard';

const ArticleCard = ({ keyIndex, className, data }: IArticleCard) => {
  return (
    <div data-cy="article-card" className={className} key={keyIndex}>
      <div className="aspect-video w-full bg-black-100 rounded-xl relative overflow-hidden cursor-pointer">
        <img
          data-cy="article-img"
          className="object-cover object-top w-full h-full"
          src={data.articleUrl}
          alt="Article image"
        ></img>
      </div>
      <div className="w-full h-fit bg-gray-200 pt-4">
        <p
          data-cy="article-title"
          className="w-fit max-w-full text-2xl font-semibold hover:text-red-500 cursor-pointer truncate"
        >
          {data.title}
        </p>
        <div className="mt-2 flex space-x-2">
          <p data-cy="article-username" className="truncate">
            {data.userName}
          </p>
          <p className="text-black-200">|</p>
          <p data-cy="article-publish" className="text-black-200">
            {data.publish}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
