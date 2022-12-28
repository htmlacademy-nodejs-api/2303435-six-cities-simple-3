import { readFileSync } from 'fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../types/offer.type.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { Town } from '../../types/town-type.type.js';
import {GoodsType} from '../../types/goods-type.enum.js';


export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([
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
        coordinationLatitude,
        coordinationLongitude,

      ]) => ({
        name:  String(name),
        description: String(description),
        postDate: new Date(postDate),
        town: town as Town,
        price: Number.parseInt(price, 10),
        preview: String(preview),
        images: images.split(";"),
        isPremium: Boolean(isPremium),
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
      }));
  }
}
