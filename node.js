const express = require('express');
const app = express();
const PORT = 3000;

// Route to find prime numbers less than 100
app.get('/find_prime_100', (req, res) => {
  const primes = [];
  for (let i = 2; i < 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  res.json({ primes });
});

// Route to find cube numbers less than 100
app.get('/find_cube_100', (req, res) => {
  const cubes = [];
  let i = 1;
  while (i ** 3 < 100) {
    cubes.push(i ** 3);
    i++;
  }
  res.json({ cubes });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

