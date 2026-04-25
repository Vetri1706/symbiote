import requests
import json

BASE_URL = "https://demo-run-symbiote.azurewebsites.net/api"
AUTH_PAYLOAD = {
    "email": "akashrenisha068@gmail.com",
    "password": "12345"
}

def test_endpoint(name, url, method="GET", headers=None, data=None):
    print(f"Testing {name}...")
    try:
        if method == "GET":
            response = requests.get(url, headers=headers)
        else:
            response = requests.post(url, headers=headers, json=data)
        
        print(f"  Status: {response.status_code}")
        if response.status_code != 200:
            print(f"  Response: {response.text}")
        return response
    except Exception as e:
        print(f"  Error: {e}")
        return None

# 1. Login
login_res = test_endpoint("Login", f"{BASE_URL}/auth/login", "POST", data=AUTH_PAYLOAD)
if not login_res or login_res.status_code != 200:
    print("CRITICAL: Login failed. Stopping tests.")
    exit(1)

token = login_res.json().get("token")
headers = {"Authorization": f"Bearer {token}"}

# 2. Dashboard Stats
test_endpoint("Dashboard Stats", f"{BASE_URL}/users/me/stats", headers=headers)

# 3. Leaderboard
test_endpoint("Leaderboard", f"{BASE_URL}/leaderboard/top10", headers=headers)

# 4. Jira Auth URL
jira_res = test_endpoint("Jira Auth URL Generation", f"{BASE_URL}/jira/oauth/authorize-url", headers=headers)
if jira_res and jira_res.status_code == 200:
    url = jira_res.json().get('url')
    if url:
        print(f"  SUCCESS: URL Generated -> {url}")
    else:
        print("  FAILURE: Response OK but 'url' field is missing or empty")
elif jira_res:
    print(f"  FAILURE: Backend returned error -> {jira_res.text}")
else:
    print("  FAILURE: No response from server")

# 5. Jira Status
test_endpoint("Jira Status", f"{BASE_URL}/jira/oauth/status", headers=headers)

print("\n--- Diagnostic Complete ---")
