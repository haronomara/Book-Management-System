import express from 'express'
import { addBook, deleteBook, getAllBooks, getBookById,updateById } from '../../controller/book-controller';

const bookRouter = express.Router()

bookRouter.get("/",getAllBooks)
bookRouter.post("/",addBook)
bookRouter.get("/:id",getBookById)
bookRouter.put("/:id",updateById)
bookRouter.delete("/:id",deleteBook)
export default bookRouter;