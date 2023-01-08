import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import dayjs from 'dayjs';

const MIN_PRICE = 500;
const MAX_PRICE = 2000;

const MIN_NUM = 1;
const MAX_NUM = 10;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const name = getRandomItems<string>(this.mockData.titles).join(';');
    const description = getRandomItem<string>(this.mockData.descriptions);
    const town = getRandomItem<string>(this.mockData.towns);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const userId = generateRandomValue(0, 1000).toString();
    const preview = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItem<string>(this.mockData.offerImages);
    const isPremium = getRandomItem<string>(this.mockData.premiumFlags);
    const rating = getRandomItem<string>(this.mockData.ratings);
    const type = getRandomItem<string>(this.mockData.types);
    const rooms = generateRandomValue(MIN_NUM, MAX_NUM).toString();
    const guests = generateRandomValue(MIN_NUM, MAX_NUM).toString();
    const coordinates = getRandomItem<string>(this.mockData.coordinates);
    const goods = getRandomItem<string>(this.mockData.goods);
    const commentsCount = getRandomItem<string>(this.mockData.commentsCount);
    const postDate = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
    return [
      name,
      description,
      postDate,
      town,
      preview,
      images,
      isPremium,
      rating,
      type,
      rooms,
      guests,
      price,
      goods,
      userId,
      commentsCount,
      coordinates,
    ].join('\t');
  }
}
