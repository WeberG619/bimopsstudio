# Form Setup Instructions

## Getting Your Web3Forms Access Key

1. Go to https://web3forms.com
2. Enter your email address: weber@bimopsstudio.com
3. Click "Create Access Key"
4. Check your email for the access key

## Adding the Access Key to Your Website

1. Open the file `pages/contact.tsx` in your GitHub repository
2. Find this line (around line 34):
   ```javascript
   access_key: 'YOUR_ACCESS_KEY_HERE', // TODO: Replace with your actual Web3Forms access key
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with the key you received via email
4. Save and commit the changes

## How It Works

- When users submit the form, it will send the data to Web3Forms
- Web3Forms will then email the form data to weber@bimopsstudio.com
- If Web3Forms fails for any reason, it will automatically fall back to opening the user's email client
- The form includes all the required fields: name, email, company, company size, Revit version, seats, and timeline

## Testing

After adding your access key:
1. Visit https://www.bimopsstudio.com/contact
2. Fill out the form with test data
3. Submit it
4. Check your email at weber@bimopsstudio.com

## Benefits of Web3Forms

- No signup or account required
- No email verification needed
- 250 free submissions per month
- Works with static sites like GitHub Pages
- Automatic spam protection
- The access key is safe to use in client-side code