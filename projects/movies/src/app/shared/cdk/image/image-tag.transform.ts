import {ImageTag} from './image-tag.interface';
import {ImageDimensions} from '../../../data-access/api/constants/image-dimensions.interface';
import {POSTER_FALLBACK} from "./constants";

export function addImageTag<T extends Object>(
  _res: T,
  options: {
    pathProp: keyof T;
    dims: ImageDimensions;
    fallback?: string;
    sizes?: string;
    srcset?: string;
  }
): T & ImageTag {
  let {pathProp, fallback, dims, sizes, srcset} = options;
  fallback = fallback || POSTER_FALLBACK;

  const res = _res as T & ImageTag;

  if (sizes !== undefined) {
    res.imgSizes = sizes || '';
    res.imgSrcset = srcset || '';
  }


  res.imgSrc = res[pathProp] ? res[pathProp]+'' : fallback;
  res.imgWidth = dims.WIDTH;
  res.imgHeight = dims.HEIGHT;
  res.imgRatio = res.imgWidth / res.imgHeight;

  return res;
}
