#!/bin/bash
echo "🚀 Starting CP_CRice System..."
sudo docker-compose down # Clean up any old containers
sudo docker-compose up --build -d # Build and run in background
echo "⏳ Waiting for services to initialize..."
sleep 10
echo "✅ System is up!"
echo "Backend API: http://localhost:8080/api/issues"
echo "Frontend UI: http://localhost:4200"

