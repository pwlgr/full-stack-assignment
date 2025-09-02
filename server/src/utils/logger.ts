export const logger = (...args: unknown[]) => {
  console.error(new Date(), ...args);
};
