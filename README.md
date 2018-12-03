# behat-js-testing
Minimal code that demonstrates how to set up Behat for JS testing.

## Prerequisites
- PHP
- Composer
- Google Chrome browser
- Create aliases to launch Chrome from the terminal by appending the code below on `~/.bash_profile`
```
alias chrome='/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
alias chromedriver='chrome --disable-gpu --remote-debugging-address=127.0.0.1 --remote-debugging-port=9222'
alias chromedriverheadless='chrome --disable-gpu --headless --remote-debugging-address=127.0.0.1 --remote-debugging-port=9222'
```

## How to run behat tests
- Clone repo `git clone git@github.com:mmenavas/behat-js-testing.git`
- Install dependencies `composer install`
- Open a terminal, navigate to repo directory, and start webserver `php -S localhost:8000`
- On a separate terminal window or tab, run `chromedriver`
- On a third terminal window or tab, navigate to repo directory and run `./vendor/bin/behat --config tests/behat.yml`

### Notes:
- Selenium2 is not required as Chromedriver is capable of running JS.

**Happy testing!**
