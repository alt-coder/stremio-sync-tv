# Stremio Sync — TizenBrew webview module

This is the **webview** version. It loads the patched Stremio build from
jsDelivr and runs entirely on-device (no VM/server). It uses **HTML5 video**;
it cannot use TizenVideo/AVPlay or AVPlay sound analysis.

For the native TV app with TizenVideo/AVPlay and the on-device AVPlay waveform,
use **TizenBrew Installer** → **Install from GitHub**:

```
alt-coder/stremio-sync-tv-app
```

That installs the `StremioSync.wgt` release (version 1.0.3), which appears in the
TV's app list, not in TizenBrew's module list.

## Webview module install

TizenBrew → Modules → Add module → GitHub:

```
alt-coder/stremio-sync-tv
```

The module list will show **Stremio Sync (webview) 1.0.3**.
