# Stremio Sync — self-contained TizenBrew module

Opens the patched Stremio TV build from jsDelivr. No VM/LAN server is required;
the app runs on-device and the waveform server is optional.

## Install

TizenBrew → **Modules** → **Add module** → **GitHub**, enter:

```
alt-coder/stremio-sync-tv
```

Then launch **Stremio Sync**.

The app is loaded from:

```
https://cdn.jsdelivr.net/gh/alt-coder/stremio-sync-tv-app/app/index.html
```

That build sets `__STREMIO_TV_APP__`, applies TV scaling and runs the subtitle
sync editor in on-device mode. No `http://<ip>:7011` is baked in.

For the native Tizen package with AVPlay/TizenVideo, use the `.wgt` release:
`alt-coder/stremio-sync-tv-app` → Releases → `StremioSync.wgt`, installed with
TizenBrew Installer (`Install from GitHub`).
