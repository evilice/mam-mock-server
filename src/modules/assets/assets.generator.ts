import Strategy from '../../generator/Strategy';
import { NumberRange, ArrayDynamic } from '../../generator/strategies';
import { Asset } from './entities/asset.entity';

const names = [
  'Bandit Of The Ocean',
  'Fish With A Goal',
  'Butchers Of Greatness',
  'Foreigners Without Shame',
  'Mice And Trees',
  'Lords And Invaders',
  'Chase Of The Stockades',
  'Surprise Of The South',
  'Possessed By The Demons',
  'Heir Of The West',
  'Foe Of Joy',
  'Soldiers Without Courage',
  'Pirates Of Utopia',
  'Priests And Boys',
  'Descendants And Owls',
  'Will Of History',
  'Restoration Of The Gods',
  'Sounds In The Sun',
];

const genres = [
  'аниме',
  'биографический',
  'боевик',
  'вестерн',
  'военный',
  'детектив',
  'детский',
  'документальный',
  'драма',
  'исторический',
  'кинокомикс',
  'комедия',
  'концерт',
  'короткометражный',
  'криминал',
  'мелодрама',
  'мистика',
  'музыка',
  'мультфильм',
  'мюзикл',
  'научный',
  'нуар',
  'приключения',
  'реалити-шоу',
  'семейный',
  'спорт',
  'ток-шоу',
  'триллер',
  'ужасы',
  'фантастика',
  'фэнтези',
  'эротика',
];

const hourGen = new NumberRange(0, 3);
const minsecGen = new NumberRange(0, 59);
const randHour = () => hourGen.generate();
const randMinSec = () => minsecGen.generate();

const getMs = (days = 0, hours = 0, minutes = 0, seconds = 0): number => {
  return (
    days * 24 * 60 * 60 * 1000 +
    hours * 60 * 60 * 1000 +
    minutes * 60 * 1000 +
    seconds * 1000
  );
};

class GenreStrategy extends Strategy {
  private readonly genresGen: ArrayDynamic;

  constructor() {
    super();
    const countGen = new NumberRange(1, 3);
    const genreGen = new NumberRange(0, genres.length - 1);
    this.genresGen = new ArrayDynamic(genreGen, countGen.generate(), 3);
  }
  generate() {
    return this.genresGen.generate();
  }
}

class AssetStrategy extends Strategy {
  private readonly assetIdGen: NumberRange;
  private readonly uidGen: NumberRange;
  private readonly contentIdGen: NumberRange;
  private readonly nameGen: NumberRange;
  private readonly ratingGen: NumberRange;
  private readonly genreGen: GenreStrategy;

  constructor() {
    super();
    this.assetIdGen = new NumberRange(10000000, 99999999);
    this.uidGen = new NumberRange(100, 102);
    this.contentIdGen = new NumberRange(100000, 999999);
    this.nameGen = new NumberRange(0, names.length - 1);
    this.ratingGen = new NumberRange(0, 5);
    this.genreGen = new GenreStrategy();
  }

  generate(): Asset {
    const userId = this.uidGen.generate();
    const name = names[this.nameGen.generate()];
    const currentTime = new Date().getTime();

    return {
      mediAassetId: this.assetIdGen.generate(),
      contentId: this.contentIdGen.generate(),
      createUserId: userId,
      lastedItUserId: userId,
      assetName: name,
      shortInfo: name,
      airTime: getMs(0, randHour(), randMinSec(), randMinSec()),
      createTime: currentTime - getMs(7),
      lastedTime:
        currentTime - getMs(randHour(), randHour(), randMinSec(), randMinSec()),
      duration: getMs(0, randHour(), randMinSec(), randMinSec()),
      rating: this.ratingGen.generate(),
      genre: this.genreGen.generate(),

      isTrusted: true,
      markDelete: false,
    };
  }
}

class AssetsListStrategy extends Strategy {
  private readonly listGen: ArrayDynamic;

  constructor() {
    super();
    const assetsCount = new NumberRange(100, 500).generate();
    const assetGen = new AssetStrategy();
    this.listGen = new ArrayDynamic(assetGen, assetsCount, 500);
  }

  generate(): Array<Asset> {
    return this.listGen.generate();
  }
}

const listAssets = new AssetsListStrategy().generate();

export default listAssets;
