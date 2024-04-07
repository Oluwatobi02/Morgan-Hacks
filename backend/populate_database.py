major = {
    'major': 'Business',
    'fields': [],
    'description': 'Business is a broad field that encompasses a wide range of disciplines, including finance, marketing, management, and accounting. A degree in business can open up a variety of career opportunities in both the public and private sectors. Business graduates are in high demand in today\'s job market, as they possess the skills and knowledge needed to succeed in a fast-paced and competitive business environment.',
      }


major_fields = {
    'name': 'Markerting',
    'jobs': [],
    'description': 'Marketing is the process of promoting and selling products or services. It involves market research, advertising, and sales. Marketing professionals work in a variety of industries, including retail, healthcare, and technology. A degree in marketing can lead to a career in advertising, public relations, or market research.',
    'resources': ['American Marketing Association', 'MarketingProfs'],
    'skills': ['Communication', 'Creativity', 'Analytical Thinking'],
    'target_companies': [
        {'name': 'Procter & Gamble', 'description': 'Procter & Gamble is an American multinational consumer goods corporation headquartered in Cincinnati, Ohio, founded in 1837 by William Procter and James Gamble. It specializes in a wide range of personal health/consumer health, and personal care and hygiene products; these products are organized into several segments including Beauty; Grooming; Health Care; Fabric & Home Care; and Baby, Feminine, & Family Care.'},
        {'name': 'Coca-Cola', 'description': 'The Coca-Cola Company is an American multinational beverage corporation incorporated under Delaware\'s General Corporation Law and headquartered in Atlanta, Georgia. The Coca-Cola Company has interests in the manufacturing, retailing, and marketing of nonalcoholic beverage concentrates and syrups.'}
    ]
}

jobs = {
    'name': 'Astrophysics',
    'description': 'act like its a Astrophysics internship job and demo real life scenario questions',
    'interview_questions': [
        {'question': 'What is your experience with Astrophysics?', 'generate': False},
        {'question': 'Can you explain the difference between a star and a planet?', 'generate': False},
        {'question': 'How do you evaluate the performance of a machine learning model?', 'generate': True}
    ]
}

from job_database import job_collection
def add_jobs(jobs):
    job_collection.insert_one(jobs)
add_jobs(jobs)
from majors_database import major_collection
def add_major(major):
    major_collection.insert_one(major)
# add_major(major)

from majorfield_database import majorfield_collection
def add_major_fields(major_fields):
    majorfield_collection.insert_one(major_fields)

# add_major_fields(major_fields)