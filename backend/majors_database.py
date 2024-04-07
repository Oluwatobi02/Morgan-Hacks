from pymongo_getdatabase import get_database

db_name = get_database()

major_collection = db_name['majors']

# majors_schema = {
#     fields: Array of type major_fields,
#     description: String,
# }