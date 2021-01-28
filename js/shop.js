// Doc:
// Computes shop bill and distribute among different users.
//
// Inputs:
//  items: list of {item: 'item description', quantity: integer, price: value_in_cents}
//  mails: list of emails
// Output:
//  a dictionary with distributed amount for each mail.
function shopBill(items, mails) {
  if (items.length === 0 || mails.length === 0) {
    return {};
  }

  const unduppedMails = removeDuplicates(mails);

  const totalAmount = computeTotal(items);
  const usersQuantity = unduppedMails.length;
  const individualPrice = parseInt(totalAmount / usersQuantity);
  const distributedAmount = usersQuantity * individualPrice;

  const valueForUser = unduppedMails.map(user => ({
    email: user,
    toPay: individualPrice,
  }));

  if (totalAmount !== distributedAmount) {
    // remaining amount after non evenly distributions goes to last user
    valueForUser[usersQuantity - 1].toPay += (totalAmount - distributedAmount);
  }

  // return as dictionary
  return Object.assign({}, ...valueForUser.map(user => ({ [user.email]: user.toPay })));
}

function removeDuplicates(list) {
  return [...new Set(list)];
}

function computeTotal(items) {
  return items.map(item => item.price * item.quantity)
    .reduce((total, price) => total + price, 0);
}

module.exports = shopBill;
