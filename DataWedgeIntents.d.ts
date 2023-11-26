declare module "DataWedgeIntents" {
    export const ACTION_BUTTON_L1: string;
    export const ACTION_BUTTON_L2: string;
    export const ACTION_BUTTON_R1: string;
    export const ACTION_BUTTON_R2: string;
    // ... define other constants
  
    export interface ExtrasObject {
      // Define the structure of the extras object
    }
  
    export interface Filter {
      // Define the structure of the filter object
    }
  
    export function sendIntent(action: string, parameterValue: any): void;
    export function sendBroadcastWithExtras(extrasObject: ExtrasObject): void;
    export function registerBroadcastReceiver(filter: Filter): void;
  }
  