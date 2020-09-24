export interface IPlan {
  category: string;
  price: number;
  available: number;
  taps: number;
  subscriptions: number;
}

export type IPlans = Array<IPlan>;
