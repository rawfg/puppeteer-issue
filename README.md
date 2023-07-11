Running `puppeteer-core` with both `--single-process` and new `headless: 'new'` on Windows crashes:

```
PS C:\Users\rawf\projects\puppeteer-issue> node .\index.mjs
file:///C:/Users/rawf/projects/puppeteer-issue/node_modules/puppeteer-core/lib/esm/puppeteer/common/Connection.js:422
            return Promise.reject(new TargetCloseError(`Protocol error (${method}): Session closed. Most likely the ${__classPrivateFieldGet(this, _CDPSessionImpl_targetType, "f")} has been closed.`));
                                  ^

TargetCloseError: Protocol error (Emulation.setDeviceMetricsOverride): Session closed. Most likely the page has been closed.
    at CDPSessionImpl.send (file:///C:/Users/rawf/projects/puppeteer-issue/node_modules/puppeteer-core/lib/esm/puppeteer/common/Connection.js:422:35)
    at EmulationManager.emulateViewport (file:///C:/Users/rawf/projects/puppeteer-issue/node_modules/puppeteer-core/lib/esm/puppeteer/common/EmulationManager.js:39:73)
    at CDPPage.setViewport (file:///C:/Users/rawf/projects/puppeteer-issue/node_modules/puppeteer-core/lib/esm/puppeteer/common/Page.js:541:96)
    at file:///C:/Users/rawf/projects/puppeteer-issue/index.mjs:14:12
```

The same configuration works just fine on MacOS. The example uses installed Chrome browser binaries but I was able to reproduce it using `puppeteer` package with a downloaded Chrome binary.

Windows:
```
Chrome brower version: 114.0.5735.199
NodeJS version: v18.16.0
npm version: 9.5.1
```

MacOS:
```
Chrome browser version: 114.0.5735.133
NodeJS version: v18.9.1
npm version: 8.19.1
```
