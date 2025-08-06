import { WebPlugin } from '@capacitor/core';

import type { SubscriptionsPlugin, ProductDetailsResponse, PurchaseProductResponse, CurrentEntitlementsResponse, LatestTransactionResponse } from './definitions';

export class SubscriptionsWeb extends WebPlugin implements SubscriptionsPlugin {
  setGoogleVerificationDetails(options: { googleVerifyEndpoint: string, bid: string }): void {
    console.info(options);
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    return options;
  }
  async getProductDetails(options: { productIdentifier: string }): Promise< ProductDetailsResponse > {
    console.info(options);
    return {
      responseCode: -1,
      responseMessage: 'Incompatible with web',
    }
  }
  async purchaseProduct(options: { productIdentifier: string, userId?: string }): Promise< PurchaseProductResponse > {
    console.info(options);
    return {
      responseCode: -1,
      responseMessage: 'Incompatible with web',
    }
  }
  async getCurrentEntitlements(): Promise< CurrentEntitlementsResponse > {
    return {
      responseCode: -1,
      responseMessage: 'Incompatible with web',
    }
  }
  async getLatestTransaction(options: {productIdentifier: string}): Promise< LatestTransactionResponse > {
    console.info(options);
    return {
      responseCode: -1,
      responseMessage: 'Incompatible with web',
    }
  }
  manageSubscriptions(): void {

  }
}
