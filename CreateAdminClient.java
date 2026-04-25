import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class CreateAdminClient {

    public static void main(String[] args) {
        // Your deployed backend URL
        String targetUrl = "https://demo-run-symbiote.azurewebsites.net/api/setup/create-admin";

        // Change these to your desired admin credentials
        String jsonInputString = "{" +
                "\"email\": \"akashrenisha068@gmail.com"\"," +
                "\"password\": \"12345"\"," +
                "\"name\": \"Akash\"" +
                "}";

        try {
            URL url = new URL(targetUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setDoOutput(true);

            System.out.println("Sending request to create admin: vetri@symbiote.ai...");

            try (OutputStream os = conn.getOutputStream()) {
                byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);
                os.write(input, 0, input.length);
            }

            int responseCode = conn.getResponseCode();
            System.out.println("Response Code: " + responseCode);

            if (responseCode == HttpURLConnection.HTTP_OK) {
                System.out.println("Success! Your admin account has been created.");
            } else {
                System.out.println("Failed to create admin. Check server logs.");
            }

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
