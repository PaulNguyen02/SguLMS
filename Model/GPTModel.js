const OpenAI = require("openai");
const client = new OpenAI({
  apiKey: "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",
});
class GPTModel{
    DateTime(){
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
        const day = currentDate.getDate();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        return year+"-"+month+"-"+day+" "+hours+":"+month+":"+minutes;
    }
    Img(){
        const img = "https://bootdey.com/img/Content/avatar/avatar2.png";
        return img;
    }
    async ConnectToGPT(question){
        const completion = await client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'user', content: question }
            ],
            temperature: 0,
        });
        return completion.choices[0].message.content;
    }
}
module.exports = new GPTModel;