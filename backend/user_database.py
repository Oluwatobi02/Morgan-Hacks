from pymongo_getdatabase import get_database

db_name = get_database()

user_collection = db_name['users']

# user_schema = {
#     name: String,
#     major: String,
#     feedbacks: Array,
# }