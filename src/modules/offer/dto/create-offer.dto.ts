import {OfferType} from '../../../types/offer-type.enum.js';
import {Town} from '../../../types/town-type.type';
import {Coordinate} from '../../../types/coordinate-type.enum';
import {GoodsType} from '../../../types/goods-type.enum';


export default class CreateOfferDto {
  public name!: string;
  public description!: string;
  public postDate!: Date;
  public town!: Town;
  public price!: number;
  public userId!: number;
  public preview!: string;
  public images!: string[];
  public isPremium!: boolean;
  public rating!: number;
  public type!: OfferType;
  public rooms!: number;
  public guests!: number;
  public coordinates!: Coordinate;
  public goods!: GoodsType[];
  public commentsCount!: number;

}
