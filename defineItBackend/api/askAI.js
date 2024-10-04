// import { Router } from "express";
// const router = Router();
// import dotenv from "dotenv";

// import OpenAI from "openai";
// dotenv.config();
// // openai.apiKey = process.env.OPENAI_API_KEY;
// //  const openai = require("openai");
// //  const Configuration = openai.Configuration

// // const configuration = new Configuration({
// //   apiKey: process.env.OPENAI_API_KEY,
// // });
// // const openai = new OpenAIApi(configuration);

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
// });



// router.post(`/`, async (req, res) => {
//     console.log("WORsssssss");
//   try {
//     const word = req.body.word || "";
//     const definition = req.body.definition;
// console.log("WORD< DEF: ", word, definition)
//     const prompt = `
// You are a teacher and you have to determine if students are correctly defining words. 
// Their definitions may not be exactly as they appear in the dictionary, 
// but they have to specifically and accurately describe the word, as if they were a definition,
// and demonstate that the student undersatns the word. 
// They cannot be subjective or simply say something accurate about the word. 
// They have to resemble the real definition. If their definition is blank(empty) or "", the answer is "no".

// Definition: ${definition}
// Word: ${word}

// Answer only yes if definition meets the criteria and no if its anything else. Responses should only be yes or no undercase with no period.
// Reply no if the definition is [].`;

//     const completion = await openai.completions.create({
//      model: "gpt-4o",
//       prompt: prompt,
//       max_tokens: 30,
//     });
//     res.json(completion.choices[0].text);
//   } catch (error) {
//     console.error("OpenAI API Error:", error);
//     res.status(500).json({ error: "An error occurred." });
//   }
// });

// export default router;



import { Router } from "express";
const router = Router();
import dotenv from "dotenv";

import OpenAI from "openai";
dotenv.config();
// openai.apiKey = process.env.OPENAI_API_KEY;
//  const openai = require("openai");
//  const Configuration = openai.Configuration

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

router.post(`/`, async (req, res) => {
  console.log("WORsssssss");
  try {
    const word = req.body.word || "";
    const definition = req.body.definition;
    console.log("WORD< DEF: ", word, definition);
    const prompt = `
You are a teacher and you have to determine if students are correctly defining words. 
Their definitions may not be exactly as they appear in the dictionary, 
but they have to specifically and accurately describe the word, as if they were a definition,
and demonstate that the student undersatns the word. 
They cannot be subjective or simply say something accurate about the word. 
They have to resemble the real definition. If their definition is blank(empty) or "", the answer is "no".

Definition: ${definition}
Word: ${word}

Answer only yes if definition meets the criteria and no if its anything else. Responses should only be yes or no undercase with no period.
Reply no if the definition is [].`;

    // const completion = await openai.completions.create({
    //   model: "gpt-4o",
    //   prompt: prompt,
    //   max_tokens: 30,
    // });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an 8th grade teacher." },
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    
    console.log("COMPLETION ", completion.choices[0].message.content);
    res.json(completion.choices[0].message.content);
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({ error: "An error occurred." });
  }
});

export default router;