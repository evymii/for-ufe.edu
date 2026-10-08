import { resetTestDatabase } from './db.js';

resetTestDatabase()
  .then(() => {
    console.log('✅ Test database reset and migrated.');
  })
  .catch((error: unknown) => {
    console.error('❌ Failed to reset test database:', error);
    process.exitCode = 1;
  });
