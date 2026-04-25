#!/bin/bash

BASE_URL="https://demo-run-symbiote.azurewebsites.net/api"
EMAIL="akashrenisha068@gmail.com"
PASSWORD="12345"

echo "1. Testing Login..."
LOGIN_RES=$(curl -s -X POST "$BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}")

TOKEN=$(echo $LOGIN_RES | grep -o '"token":"[^"]*' | cut -d'"' -f4)

echo "2. Testing User Me..."
curl -s -X GET "$BASE_URL/users/me" -H "Authorization: Bearer $TOKEN"
echo -e "\n"

echo "3. Testing Jira Auth URL..."
JIRA_RES=$(curl -s -X GET "$BASE_URL/jira/oauth/authorize-url" -H "Authorization: Bearer $TOKEN")
echo "Response: $JIRA_RES"

echo -e "\n--- Diagnostic Complete ---"
