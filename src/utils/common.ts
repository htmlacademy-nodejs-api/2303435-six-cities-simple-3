import { OfferType } from '../types/offer-type.enum.js';
import {Offer} from '../types/offer.type';
import {Town} from '../types/town-type.type';
import {GoodsType} from '../types/goods-type.enum';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [name, description, postDate, town, preview, images, isPremium, rating, type, rooms, guests, price, goods, userId, commentsCount, coordinationLatitude, coordinationLongitude] = tokens;
  return {
    name:  String(name),
    description: String(description),
    postDate: new Date(postDate),
    town: town as Town,
    price: Number.parseInt(price, 10),
    preview: String(preview),
    images: images.split(';'),
    isPremium: Boolean(isPremium === 'true'),
    rating: Number(rating),
    rooms: Number(rooms),
    guests: Number(guests),
    goods: goods.split(';') as GoodsType[],
    type: OfferType[type as 'Apartment' | 'House' | 'Room' | 'Hotel'],
    userId: Number(userId),
    coordinates: {
      latitude: Number(coordinationLatitude),
      longitude: Number(coordinationLongitude)
    },
    commentsCount: Number(commentsCount)
  } as Offer;
};
export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';
