major = {
    'major': 'major',
    'fields': ['field ids'],
    'description': 'description'
      }
major_fields = {
    'name': 'name',
    'jobs': ['job ids'], # adddddddddddddddddddddddd
    'description': 'description',
    'resources': ['links'],
    'skills': ['skills'],
    'target_companies': [
        {'name': 'name', 'description': 'description'},
        {'name': 'name', 'description': 'description'}
        ]
}
jobs = {
    'name': 'machine learning engineer',
    'description': 'i make',
    'interview_questions': [
        {'id': 1, 'question': 'question', 'generate': False},
        {'id': 2, 'question': 'question', 'generate': False}
                            ],
}


from job_database import job_collection
def add_jobs(jobs):
    job_collection.insert_one(jobs)

from majors_database import major_collection
def add_major_fields(major_fields):
    majorfield_collection.insert_one(major_fields)

from majorfield_database import majorfield_collection
def add_major_fields(major_fields):
    majorfield_collection.insert_one(major_fields)