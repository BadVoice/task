let dbLastId = 0;
/**
 * Представим, что метод вставляет запись в БД.
 * @param {string} phone - номер телефона, обязательный параметр
 * @param {Object} contactData - параметры контакта, обязательно БЕЗ поля phone
 * @returns {Object} объект контакта с полями id, phone и всеми полями из contactData
 */
const createInDb = async (phone, contactData = {}) => {
  if (typeof phone !== "string")
    throw new Error("Contact phone is not defined");

  if (contactData.phone)
    throw new Error('Property "phone" is not allowed in "contactData" object');

  const contactId = await Promise.resolve(++dbLastId); // ++increment
  return { id: contactId, phone, ...contactData };
};

const contacts = [
  { phone: "79990000001", name: "German", last_name: "Smurov" },
  { phone: "79990000002", name: "Nikita" },
  { phone: "79990000003", city: "Moscow" },
  { phone: "79990000001", name: "German", last_name: "Smurov" },
  { phone: null, city: "St. Petersburg" },
  { phone: "79990000004" },
];

// Напишите код, который использует функцию createInDb и возвращает массив, элементами которого являются:
// - объект с созданным контактом, если контакт успешно создан
// - объект с описанием ошибки в поле error, если контакт создать не удалось
// Важно! Контакты с одинаковым номером телефона должны иметь одинаковый id
//
// Пример элементов в возвращаемом массиве:
// [
// 	{ id: 1, phone: '79990000001', name: 'Oleg', last_name: 'Naumov' },
//  ...,
//  { error: 'Contact phone is not defined' }
// ]
const createContacts = async (contacts) => {};

(async () => {
  console.log(await createContacts(contacts));
})();
