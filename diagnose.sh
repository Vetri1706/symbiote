#!/bin/bash

BASE_URL="https://demo-run-symbiote.azurewebsites.net/api"
EMAIL="akashrenisha068@gmail.com"
PASSWORD="12345"

echo "1. Testing Login..."
LOGIN_RES=$(curl -s -X POST "$BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}")

TOKEN=$(echo $LOGIN_RES | grep -o '"token":"[^"]*' | cut -d'"' -f4)

if [ -z "$TOKEN" ]; then
  echo "CRITICAL: Login failed or token not found."
  echo "Response: $LOGIN_RES"
  exit 1
fi

echo "Success! Token retrieved."

echo -e "\n2. Testing Dashboard Stats..."
curl -s -X GET "$BASE_URL/users/me/stats" -H "Authorization: Bearer $TOKEN" | head -c 100
echo -e "\n"

echo "3. Testing Leaderboard..."
curl -s -X GET "$BASE_URL/leaderboard/top10" -H "Authorization: Bearer $TOKEN" | head -c 100
echo -e "\n"

echo "4. Testing Jira Auth URL..."
JIRA_RES=$(curl -s -X GET "$BASE_URL/jira/oauth/authorize-url" -H "Authorization: Bearer $TOKEN")
echo "Response: $JIRA_RES"

echo -e "\n5. Testing Jira Status..."
curl -s -X GET "$BASE_URL/jira/oauth/status" -H "Authorization: Bearer $TOKEN"
echo -e "\n"

echo "--- Diagnostic Complete ---"
