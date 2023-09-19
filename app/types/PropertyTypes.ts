export type Property = {
  createdAt: string;
  createdBy: string;
  description: string;
  id: number;
  imageUrls: string[];
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
  imageUrls: File;
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
