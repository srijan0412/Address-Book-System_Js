const AddressBook = require('./Source/Service/AddressBook');
const Contact = require('./Source/Model/Contact');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Alice", "Mathew", "Mumbai", "India", "In", "100001", "8495784598", "alice@gmail.com"
    );
    console.log(addressBook.addContact(contact1)); 

    const contact2 = new Contact(
        "Bob", "Perry", "Delhi", "India","In","1000000","5689784556","bob@gmail.com"
    )
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts Before editing", addressBook.getAllContacts());
    console.log(addressBook.editContact("John", { address: "Sample Address", city: "New Delhi", phone: "9854785698" }));
    console.log("All Contacts After editing", addressBook.getAllContacts());
    console.log(addressBook.deleteContact("John"));
    console.log("All Contacts After Deleting:", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "an", "son", "abc", "In", "I", "100A01", "12345", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}