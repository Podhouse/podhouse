export interface IPlan {
  category: string;
  price: number;
  available: number;
  views: number;
  taps: number;
  subscriptions: number;
}

export type IPlans = Array<IPlan>;
