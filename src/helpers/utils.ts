/**
 * Fake time wait to call api
 * @param { number } stallTime - Timing, default is 3s
 */
const stall = async (stallTime = 3000): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, stallTime));
};

export { stall };
