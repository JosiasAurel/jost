# Jost Analytics (Pending)

⚠⚠
The current version of the app is unstable and has a good number of features lacking.
There are no good documentations to make it easier for one to use it and therefore will not be very good to use right now
Authentication is broken. I will migrate the authentication system to be passwordless very soon (working on one)
Overall, this project is open source and therefore, all contributions minor or major will be review and considered.

Thank You ;)
⚠⚠

A simple and mini analytics service for your mini projects.

## Features

- Create an account and an app
- Connect service to app by means of script
- Start monitoring app pages views
- Developer API for fetching data related to your app [TODO]

## Technologies

PaaS: Deta

- NextJS
- React
- Tailwind
- TypeScript
- Deta
- Express

## How to use

Open the app and click 'My Account' in header or 'Start Measuring' button. You will be redicrected to the dashboard soon enough where you can create a new app using the `create` button.

Give a name to your app and a description. The most important field is the `baseURL` field. This is the field Jost uses to track and display you data from your app.

Once your app is created, the page will reload and the app will be displayed on the dashboard.
You can click the app to view latest data.
To connect to your app, click the `connect` button in the header and include the script tag to all the pages of your app you want to track, provided they all have the same base URL.
Once all that is done, leave Jost _do the magic_.

Reload the dashboard of your app to view latest data.

> Do not create multiple apps with same baseURL or connect the script multiple times to the same page or app. Doing so might cause issues

## Support

<a href="https://www.buymeacoffee.com/rocketstellar"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=🍕&slug=rocketstellar&button_colour=5F7FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00"></a>

by Josias Aurel
