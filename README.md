# Automated-Token-in-Sheet
Automated Token Generator in Google Sheets that assigns unique, sequential token IDs (e.g., THM001) for form submissions and tracks food preferences. Efficiently streamlines event management workflows with real-time ticket verification and food token assignment.
Here’s how you can structure your GitHub README for the **Automated Token Generator** script for Google Sheets:

---

# Automated Token Generator for Google Sheets

This Google Apps Script automatically assigns unique tokens (IDs) to form responses in Google Sheets and logs user information such as food preferences. It is useful for event management, registration systems, or any scenario where tracking participants and preferences is required.

## Features

- Automatically generates unique tokens in the format `THMFOOD001`, `THMFOOD002`, etc.
- Logs food preferences based on user input.
- Updates the sheet with token numbers and preferences on every form submission.
- Seamless integration with Google Forms for event registration or data entry.

## Installation

### 1. Open Google Sheets
- Create or open an existing Google Sheet where you want to use the token generator.

### 2. Open Script Editor
- In Google Sheets, navigate to `Extensions` > `Apps Script`. This will open the Apps Script editor.

### 3. Add the Script
- Copy the code from [token-generator.js](Code.gs) and paste it into the Apps Script editor.

### 4. Save the Script
- Save the script with a name, such as `Token Generator`.

### 5. Set a Trigger for Automation
- Open the script editor’s Triggers menu by clicking on the clock icon.
- Add a trigger that runs the function `assignFoodTokenNumber` on form submission (`On form submit` event).

### 6. Link Google Forms (Optional)
- If you’re using Google Forms, make sure it is linked to the Google Sheet for automatic updates when new responses are submitted.

## How It Works

Once the script is deployed and a form response is submitted:
1. A unique token (e.g., `THMFOOD001`) will be assigned to each new entry in the "Auto Number" column.
2. The user's food preference (if collected through the form) will also be recorded in the sheet.
3. The sheet will be updated automatically without manual intervention.

## Example

| Auto Number  | Name            |
|--------------|-----------------|
| THMFOOD001   | John Doe        |
| THMFOOD002   | Jane Smith      |

## Usage

This project can be used for:
- Event management (e.g., conferences, meetups)
- Food token distribution at events
- Any registration system that requires automated token assignment

## License

This project is licensed under the MIT License - see the [LICENSE](link-to-license-file) file for details.

---

This README will provide a clear explanation of the project, installation, usage, and how it works. Be sure to replace placeholder links (`link-to-script-file`, etc.) with actual links to your project files.
