// Function that returns the component in the web with the data-test correct
export const findByTestAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};
