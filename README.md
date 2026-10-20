# Stremio Sync — TizenBrew module

A TizenBrew module that opens the patched Stremio web player with the visual
subtitle-sync editor.

## Install on the TV

1. Open **TizenBrew** on the TV.
2. Go to **Modules** → **Add module**.
3. Choose **GitHub**, enter:

   ```
   alt-coder/stremio-sync-tv
   ```

4. Launch **Stremio Sync** from the module list.

TizenBrew reads this package through jsDelivr:

```
https://cdn.jsdelivr.net/gh/alt-coder/stremio-sync-tv/package.json
```

If it reports “Unknown module”, jsDelivr has not indexed the repository yet.
Wait a minute, then use the TizenBrew refresh action or relaunch TizenBrew.

## What it loads

```
http://109.123.248.61:7011/app/
```

That is the single VM server: the player and `/api/waveform` share one origin.
The subtitle-sync button is the audio-tracks icon next to CC.

## Different VM / LAN address

Edit `websiteURL` in `package.json` and the two URLs in `main.js`, commit, and
push. jsDelivr caches GitHub files; purge with:

```
https://purge.jsdelivr.net/gh/alt-coder/stremio-sync-tv/package.json
```

For a TV that cannot reach the public VM address, use the VM's LAN IP
(`http://192.168.x.x:7011/app/`) or install the locally packaged
`StremioSync.wgt` instead.

## VM unavailable

This module loads the player page from the VM. If the VM is down, the module
cannot open the app (the Tizen `.wgt` package can, because its shell is local).
Playback and waveform both need the VM in this module; the Tizen package is the
offline-shell option.
