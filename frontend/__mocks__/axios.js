// frontend/__mocks__/axios.js
export default {
  get: jest.fn().mockResolvedValue({ data: {} }),
  post: jest.fn().mockResolvedValue({ data: {} }),
  // інші методи, які ви використовуєте, також можна замокати
};
