const { test, expect } = require('@jest/globals');
const shopBill = require('./shop');

test('empty items', () => {
  const items = [];

  const mails = ['gus@gmail.com'];

  expect(shopBill(items, mails)).toStrictEqual({});
});

test('empty mails', () => {
  const items = [
    {
      item: 'mouse',
      quantity: 1,
      price: 500,
    },
  ];

  const mails = [];

  expect(shopBill(items, mails)).toStrictEqual({});
});

test('divide the amount evenly between the number of emails', () => {
  const items = [
    {
      item: 'mouse',
      quantity: 1,
      price: 300,
    },
    {
      item: 'keyboard',
      quantity: 1,
      price: 300,
    },
    {
      item: 'screen',
      quantity: 1,
      price: 300,
    },
  ];

  const mails = ['edu@gmail.com', 'gus@gmail.com', 'amanda@gmail.com'];

  expect(shopBill(items, mails)).toStrictEqual({ 'edu@gmail.com': 300, 'gus@gmail.com': 300, 'amanda@gmail.com': 300 });
});

test('divide the amount evenly for repeating decimal giving remaining amount to last user', () => {
  const items = [
    {
      item: 'mouse',
      quantity: 1,
      price: 500,
    },
    {
      item: 'keyboard',
      quantity: 1,
      price: 500,
    },
  ];

  const mails = ['edu@gmail.com', 'gus@gmail.com', 'amanda@gmail.com'];

  expect(shopBill(items, mails)).toStrictEqual({ 'edu@gmail.com': 333, 'gus@gmail.com': 333, 'amanda@gmail.com': 334 });
});

test('convert repeated mail to single mail', () => {
  const items = [
    {
      item: 'mouse',
      quantity: 1,
      price: 500,
    },
  ];

  const mails = ['gus@gmail.com', 'amanda@gmail.com', 'gus@gmail.com', 'gus@gmail.com'];

  expect(shopBill(items, mails)).toStrictEqual({ 'gus@gmail.com': 250, 'amanda@gmail.com': 250 });
});
