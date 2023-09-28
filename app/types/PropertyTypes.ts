export type Property = {
  createdAt: string;
  createdBy: string;
  description: string;
  id: number;
  imageUrl: string;
  originalImageUrl: string;
  thumbnailUrl: string;
  isActive: boolean;
  isSold: boolean;
  numberOfBaths: number;
  numberOfBeds: number;
  price: number;
  propertyType: string;
  sqft: number;
  title: string;
  updatedAt: string;
};

export type NewListingProperty = {
  title: string;
  description: string;
  imageFile: File;
  propertyType:
    | 'house'
    | 'apartment'
    | 'condo'
    | 'townhouse'
    | 'land'
    | 'parking'
    | 'other';
  price: number;
  numberOfBeds: number;
  numberOfBaths: number;
  sqft: number;
};
