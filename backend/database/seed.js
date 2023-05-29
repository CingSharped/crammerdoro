
const User = require('../models/User')

async function seedDb() {
  try {
    await User.signup("Chris", "jkl");
    await User.signup("Gi", "jkl");
    await User.signup("Alina", "jkl");
    await User.signup("Daniel", "jkl");
    await User.signup("Joao", "jkl");
  } catch (error) {
    
  }
}

seedDb()

console.log('Database seeded')