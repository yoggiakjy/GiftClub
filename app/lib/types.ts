export interface Restaurant {
  restaurant: {
    id: number;
    name: string;
    location: string;
    discount: string;
    image?: string;
    slug: string;
    hasOffers?: boolean;
  };
}

export interface Cuisine {
  id: number;
  name: string;
  image: string;
  discount: string;
  colour: string;
}

export enum Orientation {
  Horizontal,
  Vertical,
}

export interface ShortFormVideo {
  id: number;
  videoSrc: string;
  accountName: string;
  accountIcon: string;
  caption: string;
  tags: string;
  likeCount: number;
  commentCount: number;
  bookmarkCount: number;
  shareCount: number;
}

export interface Offer {
  id: string;
  discountPercentage: string;
  timeEnd: string;
  timeStart: string;
  day: string;
  availableSeats: number;
  createdAt: any;
  restaurantId: string;
}
export type DynamicRestaurant = {
  slug: string;
  title: string;
  image: string;
  description: string;
  location: string;
  openingHours: string;
  vouchers: Voucher[];
};

export type Voucher = {
  voucherTime: string;
  discount: string;
};
