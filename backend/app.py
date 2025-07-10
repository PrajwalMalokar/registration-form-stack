from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({'message': 'Flask API is running'})

@app.route('/api/submit', methods=['POST'])
def submit_form():
    form_data = request.get_json()
    
    if not os.path.exists('data/submissions.json'):
        submissions = []
    else:
        with open('data/submissions.json', 'r') as f:
            submissions = json.load(f)
    
    submissions.append(form_data)
    
    os.makedirs('data', exist_ok=True)
    with open('data/submissions.json', 'w') as f:
        json.dump(submissions, f)
    
    return jsonify({'message': 'Success'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)