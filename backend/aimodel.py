from openai import OpenAI
import json


def generate_advice(question):    


    prompt = "please give a 6 line advice on this question " + question


    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
            "content": "you are a career and academic advisor, who helps students see if a major is right for them based on their stregths and weeknesses. Assess the person and see if the major is right for them if it is not it is your role to provide advice and some alternative if their weaknesses do not match up with the major offer an alternative major that would be a better fit for them if necessary."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
    )
    return response.choices[0].message.content




