const molter = require('multer');
const storage = molter.memoryStorage();



const multer = molter({ storage });

export default multer;