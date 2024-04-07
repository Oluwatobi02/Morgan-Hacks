from pymongo_getdatabase import get_database

db_name = get_database()

majorfield_collection = db_name['major_fields']

# majorfield_schema = {
#     id: id,
#     jobs: Array of JOB ids,
#     description: String,
#     resources: Array of links,
#     skilss: Array of type Strings,
#     target_companies: Array of COMPANIES ids,
# }

# company_schema = {
#     id, id,
#     name: name,
#     description: String
# }
