export const ErrorMessage = {
  NETWORK_ERROR: 'Network Error',
} as const;

export type ErrorMessageType = keyof typeof ErrorMessage;
