import Book from "../models/Book";

export const getAllBooks = async (reg,res,next)=>{
    let books;
    try {
      books = await Book.find()  
    } catch (err) {
       return console.log(err);
    }

    if(!books){
        return res.status(500).json({message:"Unexpected Error"})  
    }
    return res.status(200).json({books})
}

export const addBook = async(reg,res,next)=>{
    const{name,auther,description,price,available,image} = reg.body;
    if(!name &&name==="" &&!auther &&auther==="" && !description &&description==="" &&!price &&price===""){
        return res.status(404).json({message: "Invalid Input"})
    }
    let book;
    try {
        book =  new Book({name,auther,description,price,available,image})
        book = await book.save();
    } catch (err) {
        return console.log(err);
    }
    if(!book){
        return res.status(500).json({message: "The book with id does not exist"})
    }
    return res.status(200).json({book})
}

export const getBookById = async (reg,res,next)=>{
    const id = reg.params.id;
    let book;
    try {
        book = await Book.findById(id)
    } catch (err) {
        return console.log(err);
    }
    if(!book){
        return res.status(500).json({message: "The book with id does not exist"})
    }
    return res.status(200).json({book})
}
export const updateById = async (reg,res,next)=>{
    const id = reg.params.id;
    const{name,auther,description,price,available,image} = reg.body;
    let book;
    try {
       book = await Book.findByIdAndUpdate(id,{
        name,auther,description,price,available,image
       }) 
       book = await book.save()
    } catch (err) {
        return console.log(err);
    }
    if(!book){
        return res.status(500).json({message: "The book with id does not exist"})
    }
    return res.status(200).json({book})
}

export const deleteBook = async (reg,res,next)=>{
    const id = reg.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id)
    } catch (err) {
        return console.log(err);
    }
    if(!book){
        return res.status(500).json({message: "The book with id does not exist"})
    }
    return res.status(200).json({message:"product secussfully deleted"})
}