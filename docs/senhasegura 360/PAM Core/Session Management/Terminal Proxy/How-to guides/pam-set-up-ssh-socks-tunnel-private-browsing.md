# How to set up SSH SOCKS Tunnel for private browsing 

This document will guide you through a step-by-step process to create an encrypted SSH Tunnel and configure your web browser to use a SOCKS proxy.

You’re going to route your local network traffic with an encrypted SOCKS proxy tunnel, so all your applications using a proxy will connect to the SSH server and forward all the to its destination. This way, your ISP (internet service provider) and third parties won’t be able to inspect your traffic or block your website access.

### Requirements

* Server running any Linux, with SSH access to route your traffic through it.
* Use a Firefox or Google Chrome web browser.
* SSH client.

***
## Setting the SSH SOCKS Tunnel

On your local machine, you’ll create an SSH tunnel to secure forward traffic on port 9090 to the SSH server on port 22.

:::(info) ()
You can use any port number greater than 1024. Only the root can open ports on privileged ports.
:::
### Linux and macOS users

1. Start an SSH session.
2. Type this command:
    1. 

Where  is to tell SSH not to execute a remote command,  9090 will open a SOCKS tunnel on the specified port number, and  is your remote SSH user and server IP address.

:::(info) ()
You can run the command in the background. Use the  option for this.
:::

:::(warning) ()
If your SSH server listens on a port different from 22 (the default), you must use the  option.
:::

Once you run the command, enter your user password. You’ll be logged into your server, and the SSH tunnel will be established.
***

### Windows users

1. Open the  application. You can download PuTTY .
2. In the  category, fill in the field:
    1. : enter your server IP address.
3. In the  >  >  category, fill in the fields:
    1. : 9090.
    2. Check the option .
    3. Click .
    4. The port number will be added in the  text box.
4. Back in the  category, fill in:
    1. : type a name for the created session.
    2. Click .
5. The new session will be displayed in the list.
6. Select the session from the list and click .
7. A terminal  window will appear. Type your  and .

You’ll be logged into your server, and the SSH tunnel will start.
***

## Setting up your Browser
After configuring your SSH SOCKS tunnel, choose your preferred browser to configure.

### Firefox
The web browser configuration will be the same for any operating system (Linux, macOS, and Windows).

1. In the  browser, in the upper right corner, click on the icon represented by the .
2. Select  on the menu.
3. Scroll down to the  and click the  button.
4. A  window appears.
    1. Check the  option.
    2. In the  field, type 127.0.0.1 and 9090 in the  field.
    3. Check the  option.
5. Click  to save the settings.

Your Firefox browser is set, and you can browse the Internet through the SSH tunnel. Type “what is my IP” on Google to verify your server IP address.

To revert the configuration to the default settings, return to the , choose the  option, and click .
***

### Google Chrome
The Google Chrome browser uses the default system proxy settings. You can use an addon or start a Chrome web browser from the command line instead of changing your operating system proxy settings.

To launch Chrome using a new profile and your SSH tunnel, in a terminal application, type these command lines according to your operational system:

#### Linux:
`
/usr/bin/google-chrome \
    --user-data-dir="$HOME/proxy-profile" \
    --proxy-server="socks5://localhost:9090"
`

#### macOS:
`
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    --user-data-dir="$HOME/proxy-profile" \
    --proxy-server="socks5://localhost:9090"
`

#### Windows:
`
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" ^
    --user-data-dir="%USERPROFILE%\proxy-profile" ^
    --proxy-server="socks5://localhost:9090"
`

The new profile will be created automatically. This way, you can run multiple instances of Chrome at the same time, and you’ll be able to browse the Internet through the SSH tunnel. Type “what is my IP” on Google to verify your server IP address.

***
Do you still have questions? Reach out to the .