// controllers/resume.controller.js

import OpenAI from "openai";
import Resume from "../models/resume.model.js";

const openai = new OpenAI({
  //   apiKey: process.env.OPENAI_API_KEY,
  apiKey: "AIzaSyDz4HS8ZYaVW40U7w6kgXvkmunEzOGW4k8",
});

// console.log(process.env.OPENAI_API_KE);

export const generateResume = async (req, res) => {
  try {
    const { fullName, title, skills, experience, education, projects } =
      req.body;

    // AI Prompt
    const prompt = `
Generate a professional resume summary and improve resume data.

Name: ${fullName}
Role: ${title}

Skills:
${skills}

Experience:
${experience}

Education:
${education}

Projects:
${projects}

Create:
1. Professional Summary
2. Improved Skills
3. Better Project Descriptions
4. Better Experience Descriptions
`;

    // OpenAI Response
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are a professional AI Resume Builder.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const aiResume = response.choices[0].message.content;

    // Save Database
    const resume = await Resume.create({
      user: req.user._id,
      fullName,
      title,
      skills,
      experience,
      education,
      projects,
      aiContent: aiResume,
    });

    return res.status(201).json({
      success: true,
      message: "Resume Generated Successfully",
      resume,
      aiResume,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Resume Generation Failed",
    });
  }
};
