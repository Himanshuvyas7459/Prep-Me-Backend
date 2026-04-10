const axios = require("axios")

exports.generateQuestions = async(req,res)=>{
    try{

        const {qualification,experience,technologies,role} = req.body

        const prompt = `
        Generate 10 interview questions for:

        Qualification: ${qualification}
        Experience: ${experience}
        Technologies: ${technologies}
        Role: ${role}
        `

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_KEY}`,
            {
                contents:[
                    {
                        parts:[{text:prompt}]
                    }
                ]
            }
        )

        const result = response.data

        res.json(result)

    }catch(error){
        res.status(500).json({message:error.message})
    }
}