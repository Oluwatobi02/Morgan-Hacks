from openai import OpenAI


client = OpenAI(api_key="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")
def generate_advice(question):    


    prompt = "please give a 6 line advice on this question " + question


    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
            "content": "you are a career and academic advisor, who helps students see if a major is right for them based on their stregths and weeknesses. Assess the person and see if the major is right for them if it is not it is your role to provide advice and some alternative if their weaknesses do not match up with the major offer an alternative major that would be a better fit for them if necessary. do not answer any other non academic or career related questions. do not hallucinate"
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
    )
    return response.choices[0].message.content

def get_next_question(major, job, text):    
    prompt = f"please use the internship interview question to get the next question to ask the interviewee for a {job} which is in the {major} area, also give a feedback on the previous question with ways to improve, return it as a json object: feedback:, next_question, knowledge, clarity, confidence. the interview question is and the interviewee's answer is {text}"


    interview_question = [
        {
            "name": "get_next_question",
            "description": "generate next question based on the previous answer and provide a feedback on the previous question with how to improve",
            "parameters": {
                "type": "object",
                "properties": {
                    "next_question": {
                        "type": "string",
                        "description": "the next question to ask the interviewee based on their input",
                    },
                    "feedback": {
                        "type": "string",
                        "description": "provide strong feedback on the previous answer and ways to improve",
                    },
                    "knowledge": {
                        "type": "number",
                        "description": "score them on their knowledge of the subject matter from 0 - 100"
                    },
                    "confidence": {
                        "type": "number",
                        "description": "score them on their confidence in their answer and articulation from 0 - 100" 
                    },
                    "clarity": {
                        "type": "number",
                        "description": "score them on their clarity in their answer and articulation from 0 - 100"
                    }
                },
            },
        },
    ]

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "you are a senior interviewer and you'll be interviewing potential interns for any field i give you and everything i ask will be as if i'm in an interview. get your math skills up"
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        functions=interview_question,
    )
    # Assuming response contains the ChatCompletion object
    return response.choices[0].message.function_call.arguments







def generate_text(file_name):
    import time
    from rev_ai import apiclient

    # create your client
    filePath = file_name
    token = "02OXoLXfKj0-pGl7SA11NG72BvG_IXxF-0foD-99-uRK_jV8MFev_nhGFjlc1Hn8GvNlVPhluiubBtQE5int-BSlrfz68"

    client = apiclient.RevAiAPIClient(token)

    # send a local file
    job = client.submit_job_local_file(filePath)

    # check job status
    job_details = client.get_job_details(job.id)

    # wait for job to complete
    while job_details.status != 'transcribed':
        print('Job is still in progress, waiting...')
        time.sleep(5)
        job_details = client.get_job_details(job.id)

    transcript_text = client.get_transcript_text(job.id)

    return transcript_text



