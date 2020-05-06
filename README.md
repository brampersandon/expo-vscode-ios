# Run VS Code Remotely on iPad with Expo and Coder

## Getting Started

1. Set up a [Coder](https://coder.com) instance

- I recommend using [DigitalOcean](https://github.com/cdr/code-server/blob/master/doc/admin/install/digitalocean.md), but all the usual cloud provider suspects are supported. If you do use DigitalOcean, I'd love for you to use [my referral link <3](https://m.do.co/c/098e33e219b3) (you get $50 in credit if you do!)
- Set a strong password, and consider using [a network-level firewall](https://www.digitalocean.com/docs/networking/firewalls/quickstart/) in addition to your server's own software firewall to limit access to only IP addresses from which you'll be accessing it.
- I'll write up a little more about the process I've used to get set up, but feel free to ping me with questions at [@brandon_mn](https://twitter.com/brandon_mn). 

At this point, you should be able to access the editor in Safari with a specific URL. Hold on to that URL, you'll need it in a sec.

2. Clone and build the Expo app

- Install [Expo Client](https://expo.io/tools#client) on your iPad
- Clone this repository with `git clone https://github.com/skylineproject/expo-vscode-ios`
- Log in to expo with `expo login`
- In `App.tsx`, replace the `CODER_URL` constant with the URL you saved at the end of step 1
- Deploy the app to your iPad with `expo publish`
- Launch the Expo app on your iPad, and you'll see "VS Code" listed there!

## Inspiration

This particular project was brought about by [Owen Williams' piece](https://twitter.com/ow/status/1136007778257002496) after WWDC about how the upcoming multitasking features in iPadOS will make it possible (even _enjoyable_!) for developers to work on the iPad. After a few idle hours of setup, I'm inclined to agree!

## Issues
- ~Slide Over/multitasking support (upstream w/ Expo Client)~ Fixed in recent versions of Expo Client (noted 1/2020)
- Copy/paste fails inconsistently (upstream w/ coder.com) – This isn't coder/code-server's fault, it goes al the way back to Monaco
- You need to enter your Coder instance's password on every launch
