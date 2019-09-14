const molter = require('multer');
const storage = molter.memoryStorage();



const uploader  = molter({ storage });

export default uploader ;