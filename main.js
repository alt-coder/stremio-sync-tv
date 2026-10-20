/*
 * Self-contained TV module.
 *
 * The page is the patched Stremio build hosted on jsDelivr; its index.html
 * already sets __STREMIO_TV_APP__ (on-device mode, TV scaling). There is no
 * VM/LAN URL here; the optional waveform server is entered from the sync
 * editor only if the user wants it.
 */
try {
    window.__STREMIO_TV_APP__ = true;
    document.documentElement.classList.add('tv');
} catch (error) {
    /* ignore */
}
