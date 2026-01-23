'use strict'; // Activate strict mode to help with debugging

/**
Calculates contacts per order.
 */
function calculateContactsPerOrder(contacts, orders) {
  const contactsRaw =
    contacts === null || contacts === undefined ? '' : String(contacts).trim(); // error on null/undefined
  const orderRaw =
    orders === null || orders === undefined ? '' : String(orders).trim();

  if (contactsRaw === '') throw new Error('A number of contacts is required.');
  if (orderRaw === '') throw new Error('A number of orders is required.');

  const contactsNumber = Number(contactsRaw);
  const orderNumber = Number(orderRaw);

  if (!Number.isFinite(contactsNumber)) {
    throw new Error('Number of contacts must be a number.');
  }
  if (!Number.isFinite(orderNumber)) {
    throw new Error('Number of orders must be a number.');
  }

  if (contactsNumber <= 0) {
    throw new Error('Number of contacts must be greater than 0.');
  }
  if (orderNumber <= 0) {
    throw new Error('Number of orders must be greater than 0.');
  }

  return contactsNumber / orderNumber;
}

// Exports for Jest
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { calculateContactsPerOrder };
}

if (typeof document !== 'undefined') {
  const form = document.getElementById('calculator'); // DOM access
  const contactsInput = document.getElementById('contacts');
  const ordersInput = document.getElementById('orders');
  const messageElement = document.getElementById('message');
  const resultElement = document.getElementById('resultCPO');

  if (form) {
    // Handle calculate button (form submit)
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent reload on calculation
      messageElement.textContent = '';
      resultElement.textContent = '';

      try {
        const result = calculateContactsPerOrder(
          contactsInput.value,
          ordersInput.value
        );
        resultElement.textContent = `Contacts per order: ${result.toFixed(4)}`; // Success path
      } catch (err) {
        messageElement.textContent = err.message; // Error path
      }
    });
  }
}