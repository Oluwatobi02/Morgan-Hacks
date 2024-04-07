from pymongo_getdatabase import get_database

db_name = get_database()

feedback_collection = db_name['feedbacks']


# feedback_schema = {
#     id: id,
#     user_id: id,
#     score : {
#         confidence: int,
#         clarity: int,
#         knowledge: int
#     },
#     description: {
#         overview: String,
#         improvement: String
#     }
# }