from pymongo_getdatabase import get_database

db_name = get_database()

job_collection = db_name['jobs']


# jobs_schema = {
#     id: id,
#     name: String from majorfield,
#     description: String,
#     interview_questions: Array of questions objects, #embedded
# }

# question_schema = {
#     question: String,
#     generate: bool
# }

