import {Town} from './town-type.type';
import {OfferType} from './offer-type.enum';
import {Coordinate} from './coordinate-type.enum';
import {GoodsType} from './goods-type.enum';

export type Offer = {
  name: string;
  description: string;
  postDate: Date;
  town: Town;
  price: number;
  userId: number;
  preview: string;
  images: string[];
  isPremium: boolean;
  rating: number;
  type: OfferType;
  rooms: number;
  guests: number;
  coordinates: Coordinate;
  goods: GoodsType[];
  commentsCount: number;
}
