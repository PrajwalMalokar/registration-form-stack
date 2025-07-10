# Registration Form Stack

A full-stack web application with Express.js frontend and Flask backend for handling user registration forms.

## 🚀 Features

- **Frontend**: Express.js with EJS templating
- **Backend**: Flask REST API
- **Data Storage**: JSON file-based storage
- **Containerized**: Docker & Docker Compose
- **CORS Enabled**: Cross-origin requests supported

## 🛠️ Tech Stack

**Frontend:**
- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- HTML/CSS

**Backend:**
- Python 3.11
- Flask
- Flask-CORS
- JSON storage

**DevOps:**
- Docker
- Docker Compose

## 📁 Project Structure

```
registration-form-stack/
├── frontend/
│   ├── app.js              # Express server
│   ├── package.json        # Node.js dependencies
│   ├── Dockerfile          # Frontend container
│   ├── .env               # Environment variables
│   └── views/
│       └── index.ejs      # Registration form template
├── backend/
│   ├── app.py             # Flask API server
│   ├── requirements.txt   # Python dependencies
│   ├── Dockerfile         # Backend container
│   └── data/              # JSON data storage
├── docker-compose.yaml    # Multi-container orchestration
└── README.md             # Project documentation
```

## 🏃‍♂️ Quick Start

### Using Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/PrajwalMalokar/registration-form-stack.git
   cd registration-form-stack
   ```

2. **Start the application**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Manual Setup

**Frontend Setup:**
```bash
cd frontend
npm install
node app.js
```

**Backend Setup:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Backend health check |
| POST | `/api/submit` | Submit registration form |

## 🔧 Environment Variables

**Frontend (.env):**
```env
BACKEND_URL=http://backend:5000/api/submit
```

## 📊 Form Data

The registration form collects:
- Name
- Email
- Age

Data is stored in `backend/data/submissions.json`

## 🐳 Docker Commands

```bash
# Build and start containers
docker-compose up --build

# Start in background
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs

# Access backend container
docker exec -it registration-form-stack_backend_1 bash
```


## 🧪 Testing the Application

1. Open http://localhost:3000
2. Fill out the registration form
3. Submit the form
4. Check stored data:
   ```bash
   docker exec registration-form-stack_backend_1 cat data/submissions.json
   ```



## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Prajwal Malokar**
- GitHub: [@PrajwalMalokar](https://github.com/PrajwalMalokar)

