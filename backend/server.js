import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './routes/userRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import userRoleRoutes from './routes/userRoleRoutes.js';


const app = express();

app.use(helmet());  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

app.use('/api/v1', userRoutes);  
app.use('/api/v1', roleRoutes);  
app.use('/api/v1', userRoleRoutes);  



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
