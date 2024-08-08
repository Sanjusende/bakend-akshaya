const Blog = require("../Modules/Blog");
const Creatblog = async (req, res) => {
    try {
        console.log(req.body)

        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({
                status: false,
                message: "title is required"
            })
        }
        if (!description) {
            return res.status(400).json({
                // port  400 is represent on bed request
                status: false,
                message: "description is required"
            })
        }

        const blog = await new Blog({
            title,
            description
        }
        )

       await blog.save();
        res.status(201).json({
            // port 201 Database me entry hue hai
            status: true,
            message: "Blog created successfully",
            data: blog
    


        })  
    }

    catch {
        (e) => {
            //port 500 Internal server error
            res.status(500).json({
                status: true,
                messege: "internal server error",
                error: e.message
            })
        }
    }
}



const getallblogs = async (req, res) => {
    const allBlog = await Blog.find()
    try {
        if (!allBlog) {
            res.status(400).json({
                status: false,
                message: "title  is required"
            })
        }
        res.status(201).json({
            status: true,
            message: "getallBlog created successfully",
            data: allBlog
        })

    }
    catch {
        (e) => {
            //port 500 Internal server error
            res.status(500).json({
                status: true,
                messege: "internal server error",
                error: e.message
            })
        }
    }
}

const deletblog = async (req, res) => {

    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndDelete(id);
        res.status(201).json({
            status: true,
            messege: "blog deleted succefully",
            data: blog
        })
    }
    catch {
        (e) => {
            //port 500 Internal server error
            res.status(500).json({
                status: true,
                messege: "internal server error",
                error: e.message
            })
        }
    }


}


module.exports = { Creatblog, getallblogs, deletblog };