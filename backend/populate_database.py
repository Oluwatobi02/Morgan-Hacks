major = {
    'major': '',
    'fields': [],
    'description': 'Criminal justice is the delivery of justice to those who have committed crimes. The criminal justice system is a series of government agencies and institutions. Goals include the rehabilitation of offenders, preventing other crimes, and moral support for victims. The primary institutions of the criminal justice system are the police, prosecution and defense lawyers, the courts and prisons.'
      }
major_fields = {
    'name': 'Software Engineer',
    'jobs': [], 
    'description': 'A software engineer is a professional responsible for designing, developing, and maintaining software systems. They analyze user requirements, design software solutions, write code, and test and debug software to ensure it meets quality standards. Additionally, software engineers often collaborate with other team members, such as designers and project managers, to deliver successful software projects on time and within budget.',
    'resources': ['https://www.geeksforgeeks.org/', 'https://www.w3schools.com/', 'https://www.freecodecamp.org/'],
    'skills': ['Programming Efficiency', 'Problem Solving Skills', 'Collaboration and Cooperation'],
    'target_companies': [
        {'name': 'Narmi', 'description': 'Narmi specializes in digital banking software engineering for credit unions and community banks, delivering tailored, secure, and user-friendly digital banking platforms. Their team creates innovative features, ensures robust security, and optimizes performance to enhance the banking experience for customers while meeting regulatory standards.'},
        {'name': 'Gusto', 'description': 'Gusto specializes in cloud-based HR and payroll software for small businesses. Their engineering team develops intuitive platforms to streamline payroll, benefits, and compliance management, prioritizing user experience and data security.'}
        ]
}
jobs = {
    'name': 'teacherr',
    'description': 'i teach',
    'interview_questions': [
        {'id': 1, 'question': 'question', 'generate': False},
        {'id': 2, 'question': 'question', 'generate': False}
                            ],
}


from job_database import job_collection
def add_jobs(jobs):
    job_collection.insert_one(jobs)

from majors_database import major_collection
def add_major(major):
    major_collection.insert_one(major)


from majorfield_database import majorfield_collection
def add_major_fields(major_fields):
    majorfield_collection.insert_one(major_fields)

add_major_fields(major_fields)