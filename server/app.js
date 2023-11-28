const express = require('express');
const app = express();
const Error = require('./middlewares/Error');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser())

//route imports
const ProductRouter = require('./routes/productRoute');
const UserRouter = require('./routes/userRoute');
const OrderRouter = require('./routes/orderRoute');

app.use('/api/v1', ProductRouter);
app.use('/api/v1', UserRouter);
app.use('/api/v1', OrderRouter);
app.use(Error);

module.exports = app