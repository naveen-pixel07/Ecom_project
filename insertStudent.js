const { MongoClient } = require('mongodb');
const readline = require('readline-sync');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('college');
    const students = db.collection('student123');

    // Read student data
    const student = {
      usn: readline.question('Enter USN: '),
      name: readline.question('Enter Name: '),
      sem: parseInt(readline.question('Enter Semester: ')),
      year_of_admission: parseInt(readline.question('Enter Year of Admission: '))
    };

    // Insert into MongoDB
    const result = await students.insertOne(student);
    console.log('Student inserted with ID:', result.insertedId);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
